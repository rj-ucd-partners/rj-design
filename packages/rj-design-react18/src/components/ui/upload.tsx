import { cn } from "@/lib/utils";
import { Label } from "./label";
import { useState, useRef } from "react";
import { Progress } from "./progress";
import { Button } from "./button";
import { SuccessIcon } from "../icon/successIcon";
import { AbnormalIcon } from "../icon/abnormalIcon";

interface FileItem {
    file: File;
    id: string;
    status: 'waiting' | 'uploading' | 'success' | 'error';
    progress: number;
    url?: string;
}

interface UploadProps extends React.ComponentProps<'div'> {
    desc: string;
    onUploadComplete?: (files: FileItem[]) => void;
    onUploadProgress?: (fileId: string, progress: number) => void;
    maxFileSize?: number; // MB
    acceptedTypes?: string;
    uploadUrl?: string;
}

function Upload({
    desc,
    className,
    onUploadComplete,
    onUploadProgress,
    maxFileSize = 100,
    acceptedTypes = "*/*",
    uploadUrl = "http://localhost:3001/api/upload",
    ...props
}: UploadProps) {
    const [files, setFiles] = useState<FileItem[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (!selectedFiles) return;

        const newFiles: FileItem[] = Array.from(selectedFiles)
            .filter(file => {
                const sizeMB = file.size / (1024 * 1024);
                if (sizeMB > maxFileSize) {
                    alert(`文件 ${file.name} 超过 ${maxFileSize}MB 限制`);
                    return false;
                }
                return true;
            })
            .map(file => ({
                file,
                id: Date.now() + Math.random().toString(),
                status: 'waiting',
                progress: 0
            }));
        setFiles(prev => [...prev, ...newFiles]);

        // 自动开始上传
        if (newFiles.length > 0) {
            uploadFiles(newFiles);
        }
    };

    const uploadFiles = async (filesToUpload?: FileItem[]) => {
        const targetFiles = filesToUpload || files.filter(f => f.status === 'waiting');
        if (targetFiles.length === 0) return;

        setIsUploading(true);

        for (const fileItem of targetFiles) {
            await uploadSingleFile(fileItem);
        }

        setIsUploading(false);
        const completedFiles = files.filter(f => f.status === 'success');
        onUploadComplete?.(completedFiles);
    };

    const uploadSingleFile = async (fileItem: FileItem) => {
        try {
            // 更新状态为上传中
            setFiles(prev => prev.map(item =>
                item.id === fileItem.id ? { ...item, status: 'uploading' } : item
            ));

            const formData = new FormData();
            formData.append('file', fileItem.file);
            formData.append('filename', fileItem.file.name);

            // 使用 XMLHttpRequest 以便监听上传进度
            const response = await uploadWithProgress(formData, fileItem.id);

            // 上传成功
            setFiles(prev => prev.map(item =>
                item.id === fileItem.id
                    ? { ...item, status: 'success', progress: 100, url: response.url }
                    : item
            ));

        } catch (error) {
            console.error('上传失败:', error);
            setFiles(prev => prev.map(item =>
                item.id === fileItem.id ? { ...item, status: 'error' } : item
            ));
        }
    };

    const uploadWithProgress = (formData: FormData, fileId: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            // 监听上传进度
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    console.log('progress', progress);
                    setFiles(prev => prev.map(item =>
                        item.id === fileId ? { ...item, progress } : item
                    ));
                    onUploadProgress?.(fileId, progress);
                }
            });

            // 监听完成事件
            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        resolve({ success: true, url: '' });
                    }
                } else {
                    reject(new Error(`Upload failed: ${xhr.status}`));
                }
            });

            // 监听错误事件
            xhr.addEventListener('error', () => {
                reject(new Error('Upload failed'));
            });

            // 发送请求
            xhr.open('POST', uploadUrl);
            xhr.send(formData);
        });
    };

    const removeFile = (fileId: string) => {
        setFiles(prev => prev.filter(item => item.id !== fileId));
    };

    const retryUpload = (fileId: string) => {
        const fileToRetry = files.find(f => f.id === fileId);
        if (fileToRetry) {
            setFiles(prev => prev.map(item =>
                item.id === fileId ? { ...item, status: 'waiting', progress: 0 } : item
            ));
            uploadSingleFile({ ...fileToRetry, status: 'waiting', progress: 0 });
        }
    };

    return (
        <div className={cn(
            'flex flex-col items-start justify-start gap-2',
            className
        )} {...props}>
            <form encType="multipart/form-data">
                <input
                    ref={fileInputRef}
                    type="file"
                    id="fileInput"
                    name="files[]"
                    multiple
                    accept={acceptedTypes}
                    onChange={handleFileSelect}
                    className="hidden"
                />
                <Label htmlFor={'fileInput'}>
                    <div className={cn(
                        'inline-flex flex-row items-center justify-center gap-1',
                        'bg-primary text-text hover:bg-primary-hover active:bg-primary-active',
                        'rounded-md cursor-pointer transition-colors',
                        'px-3 py-1 h-8',
                        isUploading && 'opacity-50 cursor-not-allowed'
                    )}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9981 6.12552C11.9994 6.08384 12 6.042 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 6.04199 4.00065 6.08384 4.00193 6.12552C2.27572 6.56889 1 8.13547 1 10C1 12.2091 2.79086 14 5 14H11C13.2091 14 15 12.2091 15 10C15 8.13546 13.7243 6.56889 11.9981 6.12552ZM7.63968 6.01454C7.83983 5.75453 8.23193 5.75453 8.43209 6.01454L10.8803 9.19486C11.1334 9.52364 10.899 9.99986 10.4841 9.99986H8.79999L8.79994 13.9999L7.19994 13.9998L7.19999 9.99986H5.58767C5.17275 9.99986 4.93837 9.52364 5.19147 9.19486L7.63968 6.01454Z" fill="currentColor" />
                        </svg>
                        <span className="font-normal not-italic text-[13px] leading-[20px]">
                            {isUploading ? '上传中...' : '上传文件'}
                        </span>
                    </div>
                </Label>
            </form>

            <div className="flex flex-1 w-full">
                <span className="text-[13px] leading-[20px] text-secondary-information">
                    {desc} (最大 {maxFileSize}MB)
                </span>
            </div>

            {/* 文件列表 */}
            {files.length > 0 && (
                <div className="w-full flex flex-col gap-2">
                    {files.map(fileItem => (
                        <UploadItem file={fileItem} removeFile={removeFile} retryUpload={retryUpload} />
                    ))}
                </div>
            )}
        </div>
    );
}

function UploadItem({
    className,
    file,
    ...props
}: React.ComponentProps<'div'> & {
    file: FileItem;
    removeFile: (fileId: string) => void;
    retryUpload: (fileId: string) => void;
}) {
    return (
        <div className="w-full flex flex-row items-center justify-between" {...props}>
            <div className=" flex flex-row items-center gap-2">
                <div className="flex-shrink-0">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.3258 3.40145C4.3241 3.40309 4.32241 3.40475 4.32073 3.40643L2.55297 5.17419C1.23495 6.49221 1.23495 8.62914 2.55297 9.94716C3.87099 11.2652 6.00792 11.2652 7.32594 9.94716L10.1544 7.11874C10.3008 6.97229 10.3008 6.73485 10.1544 6.58841C10.0079 6.44196 9.77048 6.44196 9.62403 6.58841L6.79561 9.41683C5.77048 10.442 4.10842 10.442 3.0833 9.41683C2.05817 8.39171 2.05817 6.72965 3.0833 5.70452L4.66931 4.11851C4.67101 4.11687 4.6727 4.11521 4.67438 4.11353L5.91182 2.8761C6.54642 2.2415 7.57531 2.2415 8.20991 2.8761C8.84452 3.5107 8.84452 4.53959 8.20991 5.17419L7.96246 5.42165L7.95728 5.42673L5.38139 8.00262C5.13731 8.2467 4.74159 8.2467 4.49751 8.00262C4.25343 7.75854 4.25343 7.36281 4.49751 7.11874L7.32593 4.29031C7.47238 4.14386 7.47238 3.90643 7.32593 3.75998C7.17949 3.61353 6.94205 3.61353 6.7956 3.75998L3.96718 6.58841C3.43021 7.12538 3.43021 7.99598 3.96718 8.53295C4.50415 9.06992 5.37475 9.06992 5.91172 8.53295L7.49763 6.94704L7.50281 6.94196L8.74024 5.70452C9.66774 4.77703 9.66774 3.27326 8.74024 2.34577C7.81275 1.41827 6.30898 1.41827 5.38149 2.34577L4.3258 3.40145Z" fill="#C0C7CF" />
                    </svg>
                </div>
                <span className={cn(
                    file.status === 'error' ? 'text-danger' : 'text-primary',
                    'text-[13px] leading-[20px] line-clamp-1'
                )}
                >{file.file.name}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
                {
                    file.status === 'uploading' &&
                    <Progress value={file.progress} />
                }
                {
                    file.status === 'success' &&
                    <SuccessIcon className="size-4" />
                }
                {
                    file.status === 'error' &&
                    <div className="flex flex-row items-center gap-1">
                        <Button variant={'link'} size={'link'} onClick={() => { props.retryUpload(file.id) }}>
                            点击重试
                        </Button>
                        <AbnormalIcon className="size-4" />
                    </div>
                }
                <Button variant={'transparent'} size={'link'} onClick={() => { props.removeFile(file.id) }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        <path d="M4.50845 3C4.50844 3 4.50847 3 4.50845 3L7.4915 3C7.49149 3 7.49152 3 7.4915 3L9.75 3C10.1642 3 10.5 2.66421 10.5 2.25C10.5 1.83579 10.1642 1.5 9.75 1.5H7.5V0.766968C7.5 0.756787 7.4966 0.75 7.4915 0.75H4.5085C4.5034 0.75 4.5 0.756787 4.5 0.766968V1.5H2.25C1.83579 1.5 1.5 1.83579 1.5 2.25C1.5 2.66421 1.83579 3 2.25 3H4.50845Z" fill="#C0C7CF" />
                        <path d="M3.37248 11.25H8.62726C8.9018 11.25 9.12914 11.0443 9.14777 10.7785L9.59871 4.28881C9.61859 3.99776 9.38008 3.75 9.07821 3.75H2.92154C2.61967 3.75 2.38115 3.99655 2.40103 4.28881L2.85197 10.7785C2.87061 11.0443 3.09794 11.25 3.37248 11.25ZM4.49991 5.25H5.24991V10.2981H4.49991V5.25ZM7.49991 5.25V10.2981H6.74991V5.25H7.49991Z" fill="#C0C7CF" />
                    </svg>
                </Button>
            </div>
        </div >
    );
}

export { Upload };