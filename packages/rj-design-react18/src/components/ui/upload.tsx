import { cn } from "@/lib/utils";
import { Label } from "./label";
import { useState, useRef, useCallback, useEffect } from "react";
import { Progress } from "./progress";
import { Button } from "./button";
import { SuccessIcon } from "../icon/successIcon";
import { AbnormalIcon } from "../icon/abnormalIcon";
import { FileIcon } from "../icon/file-icon";
import { Separator } from "./separator";
import { DeleteIcon } from "../icon/delete-icon";
import { EyeIcon } from "../icon/eye-icon";
import { CloseIcon } from "../icon/closeIcon";

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
    multiple: boolean,
    maxUploadSize?: number
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
    useEffect(() => {
        console.log('flie', file)
    }, [file])
    return (
        <div className={cn(
            "w-full flex flex-row items-center gap-2",
            className
        )} {...props}>
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
            <div className="flex flex-row items-center justify-end gap-2 flex-1">
                {
                    file.status === 'waiting' &&
                    <div className={`w-3 h-3 rounded-full border-1 border-t-transparent animate-spin`}></div>

                }
                {
                    file.status === 'uploading' &&
                    <div className="flex flex-row gap-[2px] flex-1 items-center justify-center">
                        <Progress variant={'default'} value={file.progress} className="flex-1" />
                        <span className="text-[12px]">{file.progress}%</span>
                    </div>
                }
                {
                    file.status === 'success' &&
                    <SuccessIcon className="size-4" />
                }
                {
                    file.status === 'error' &&
                    <div className="flex flex-row items-center gap-1">
                        <Button variant={'link'} size={'link'} onClick={() => { props.retryUpload(file.id) }} className="text-[12px]">
                            点击重试
                        </Button>
                        <AbnormalIcon className="size-4" />
                    </div>
                }
                <Button variant={'transparent'} size={'link'} onClick={() => { props.removeFile(file.id) }}>
                    <DeleteIcon className="text-secondary size-4" />
                </Button>
            </div>
        </div >
    );
}

function Upload({
    desc,
    className,
    onUploadComplete,
    onUploadProgress,
    multiple = false,
    maxFileSize = 100,
    maxUploadSize = 5,
    acceptedTypes = "*/*",
    uploadUrl = "http://localhost:3001/api/upload",
    ...props
}: UploadProps) {
    const [files, setFiles] = useState<FileItem[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // const formatFileSize = (bytes: number): string => {
    //     if (bytes === 0) return '0 Bytes';
    //     const k = 1024;
    //     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    //     const i = Math.floor(Math.log(bytes) / Math.log(k));
    //     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    // };

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
        // 清空input，允许选择相同文件再次触发onChange
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const uploadFiles = async (filesToUpload?: FileItem[]) => {
        const targetFiles = filesToUpload || files.filter(f => f.status === 'waiting');
        if (targetFiles.length === 0) return;

        setIsUploading(true);
        const uploadMaxFiles = async (files: FileItem[]) => {
            await Promise.all(files.map(fileItem => uploadSingleFile(fileItem)));
        }
        let fileChunkings: FileItem[] = [];
        for (let index = 0; index < targetFiles.length; index++) {
            fileChunkings.push(targetFiles[index]);
            if (fileChunkings.length === maxUploadSize || index === targetFiles.length - 1) {
                await uploadMaxFiles(fileChunkings);
                fileChunkings = [];
            }
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
                        console.log('xhr.responseText', xhr.responseText)
                        const response = JSON.parse(xhr.responseText);
                        console.log('xhr.responseText', response)
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
                    multiple={multiple}
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

function DragUpload({
    desc,
    onUploadComplete,
    onUploadProgress,
    maxFileSize = 100,
    maxUploadSize = 5,
    acceptedTypes = "*/*",
    uploadUrl = "http://localhost:3001/api/upload",
    className,
    ...props
}: UploadProps) {
    const [files, setFiles] = useState<FileItem[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addFiles = useCallback(async (newFiles: FileList | null) => {
        if (!newFiles) return;

        const fileArray = Array.from(newFiles);
        const validFiles = fileArray.filter(file => {
            // 检查文件大小
            if (file.size > maxFileSize * 1024 * 1024) {
                alert(`文件 ${file.name} 超过最大限制 ${maxFileSize}MB`);
                return false;
            }
            return true;
        });

        const newFileItems: FileItem[] = validFiles.map(file => ({
            id: Date.now() + Math.random().toString(),
            file,
            status: 'waiting',
            progress: 0
        }));

        setFiles(prev => [...prev, ...newFileItems]);
        if (newFileItems.length > 0) {
            await uploadFiles(newFileItems);
        }

        onUploadComplete?.(newFileItems);
    }, [maxFileSize]);

    const uploadFiles = async (filesToUpload?: FileItem[]) => {
        const targetFiles = filesToUpload || files.filter(f => f.status === 'waiting');
        if (targetFiles.length === 0) return;

        setIsUploading(true);
        const uploadMaxFiles = async (files: FileItem[]) => {
            await Promise.all(files.map(fileItem => uploadSingleFile(fileItem)));
        }
        let fileChunkings: FileItem[] = [];
        for (let index = 0; index < targetFiles.length; index++) {
            fileChunkings.push(targetFiles[index]);
            if (fileChunkings.length === maxUploadSize || index === targetFiles.length - 1) {
                await uploadMaxFiles(fileChunkings);
                fileChunkings = [];
            }
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
                        console.log('xhr.responseText', xhr.responseText)
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

    // 处理点击选择文件
    const handleClick = useCallback(() => {
        if (!isUploading) fileInputRef.current?.click();
    }, []);

    // 处理文件选择
    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        addFiles(e.target.files);
        // 清空input，允许选择相同文件再次触发onChange
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [addFiles]);

    // 处理拖放事件
    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsUploading(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsUploading(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsUploading(false);
        addFiles(e.dataTransfer.files);
    }, [addFiles]);
    return (
        <div className={cn(
            "flex flex-col w-full h-full",
            className
        )}>
            <div>
                <div className={cn(
                    'flex flex-col items-center justify-center gap-2 bg-fill-dark-hover-active-disabled flex-1',
                    'hover:border hover:border-dashed hover:border-primary',
                    'rounded',
                    'h-[120px]'
                )}
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <FileIcon />
                    <p className="text-secondary-information">
                        {
                            isUploading &&

                            <span>上传中</span>
                        }
                        {!isUploading &&
                            <span><span className="text-primary font-medium">点击上传</span> / 拖拽到此区域</span>
                        }
                    </p>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    name="files[]"
                    multiple={props.multiple}
                    onChange={handleFileChange}
                    className="hidden"
                    accept={acceptedTypes}
                />
            </div>
            <span className="text-[13px] leading-[20px] text-secondary-information">
                {desc}
            </span>
            <div className="mt-4 space-y-2 bg-fill">
                {files.map(file => (
                    <UploadItem
                        key={file.id}
                        file={file}
                        removeFile={removeFile}
                        retryUpload={retryUpload}
                    />
                ))}
            </div>
        </div>
    );
}

function AvatarUpload({
    desc,
    onUploadProgress,
    uploadUrl = "http://localhost:3001/api/upload",
    maxFileSize = 10,
    className,
    ...props
}: UploadProps & {
    deleteCallback?: () => void
}) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<FileItem | undefined>(undefined);
    // const [isUploading, setIsUploading] = useState(false);

    const addFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles) return;

        const fileArray = Array.from(newFiles);
        const validFiles = fileArray.filter(file => {
            // 检查文件大小
            if (file.size > maxFileSize * 1024 * 1024) {
                alert(`文件 ${file.name} 超过最大限制 ${maxFileSize}MB`);
                return false;
            }
            return true;
        });

        const newFileItems: FileItem[] = validFiles.map(file => ({
            id: Date.now() + Math.random().toString(),
            file,
            status: 'waiting',
            progress: 0
        }));

        setFile(newFileItems[0]);
        uploadSingleFile(newFileItems[0]);
    }, [maxFileSize]);
    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        addFiles(e.target.files);
        // 清空input，允许选择相同文件再次触发onChange
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [addFiles]);
    const uploadSingleFile = async (fileItem: FileItem) => {
        // setIsUploading(true);
        try {
            // 更新状态为上传中
            setFile({ ...file!, status: 'uploading' })

            const formData = new FormData();
            formData.append('file', fileItem.file);
            formData.append('filename', fileItem.file.name);

            // 使用 XMLHttpRequest 以便监听上传进度
            await uploadWithProgress(formData, fileItem.id);
            setFile({ ...file!, progress: 100, status: 'success', url: 'https://picx.zhimg.com/v2-ed005842502c6cb29590c2e38d5a1d0b_1440w.jpg' });
            // 上传成功
        } catch (error) {
            console.error('上传失败:', error);
            setFile({ ...file!, status: 'error' })
        }
        // setIsUploading(false);
    }
    const uploadWithProgress = (formData: FormData, fileId: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            // 监听上传进度
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    setFile({ ...file!, progress })
                    onUploadProgress?.(fileId, progress);
                }
            });

            // 监听完成事件
            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        console.log('xhr', xhr.responseText)

                        resolve({ success: true, });
                    } catch (error) {
                        console.error('解析失败', error);
                        resolve({ success: true, url: '11' });
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
    const handleClick = () => {
        if (file?.status === 'success') return;
        fileInputRef.current?.click();
    }
    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        // setIsUploading(true);
    }, []);
    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        // setIsUploading(false);
    }, []);
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        if (file?.status === 'success') return;
        e.preventDefault();
        // setIsUploading(false);
        addFiles(e.dataTransfer.files);
    };
    const clearFile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setFile(undefined);
        if (props.deleteCallback) props.deleteCallback();
    }

    return (
        <div className={cn(
            'flex flex-col items-start gap-1',
        )} {...props}>
            <div className={cn(
                'w-30 h-30',
                'relative flex flex-col items-center justify-center gap-2.5',
                'bg-fill-dark-hover-active-disabled',
                'cursor-pointer',
                file?.status === 'waiting' && 'hover:border hover:border-dashed hover:border-primary',
                file?.status === 'error' && 'bg-danger-light',
                'hover:[&_[data-slot=mask]]:flex',
                className
            )}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
                {
                    !file &&
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 8.5H11.5V11.5H8.5V12.5H11.5V15.5H12.5V12.5H15.5V11.5H12.5V8.5Z" fill="#C0C7CF" />
                    </svg>
                }
                {
                    !file &&
                    <span className="text-[12px] leading-[20px] font-normal text-secondary-information">点击上传图片</span>
                }
                {
                    file?.status === 'uploading' &&
                    <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-[12px] leading-[20px] font-normal text-secondary-information">上传中</span>
                        <Progress variant={'default'} size={'sm'} value={file.progress} className="w-20 h-[2px]" />
                    </div>
                }
                {
                    (file?.status === 'success' && file.url)
                    &&
                    <img src={file.url} className="w-full h-full" />
                }
                {
                    file?.status === 'error' &&
                    <div className="flex gap-2 flex-col items-center justify-center  text-danger text-[12px] leading-[20px] ">
                        <CloseIcon className="size-4" />
                        <span >此处为错误提示</span>
                    </div>
                }
                <input
                    ref={fileInputRef}
                    type="file"
                    name="files[]"
                    onChange={handleFileChange}
                    className="hidden"
                    accept={props.acceptedTypes}
                />
                {
                    file?.status === 'success' &&
                    <div data-slot='mask' className="z-10 w-full h-full absolute hidden bg-mask flex items-center justify-center">
                        <div className="flex h-[16px] flex-row items-center justify-center gap-3">
                            <Button variant={'transparent'} size={'link'} >
                                <EyeIcon className="size-4" />
                            </Button>
                            <Separator orientation={'vertical'} className="h-full bg-border-split" />
                            <Button variant={'transparent'} size={'link'} onClick={clearFile}>
                                <DeleteIcon width={17} height={16} />
                            </Button>
                        </div>
                    </div>
                }
            </div>
            <div className="flex flex-1 w-full">
                <span className={cn(
                    "text-[13px] leading-[20px] text-secondary-information",
                    file?.status === 'error' && 'text-danger'
                )}>
                    {desc}
                </span>
            </div>
        </div>
    );
}

function AvatarFrame({
    desc,
    onUploadProgress,
    uploadUrl = "http://localhost:3001/api/upload",
    maxFileSize = 10,
    imageName = "图片名称",
    information = 'XXXX',
    ...props
}: UploadProps & {
    imageName: string,
    information: string,
    deleteCallback?: () => void,
}) {
    const [file, setFile] = useState<FileItem | undefined>(undefined);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles) return;

        const fileArray = Array.from(newFiles);
        const validFiles = fileArray.filter(file => {
            // 检查文件大小
            if (file.size > maxFileSize * 1024 * 1024) {
                alert(`文件 ${file.name} 超过最大限制 ${maxFileSize}MB`);
                return false;
            }
            return true;
        });

        const newFileItems: FileItem[] = validFiles.map(file => ({
            id: Date.now() + Math.random().toString(),
            file,
            status: 'waiting',
            progress: 0
        }));

        setFile(newFileItems[0]);
        uploadSingleFile(newFileItems[0]);
    }, [maxFileSize]);
    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        addFiles(e.target.files);
        // 清空input，允许选择相同文件再次触发onChange
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [addFiles]);
    const uploadSingleFile = async (fileItem: FileItem) => {
        // setIsUploading(true);
        try {
            // 更新状态为上传中
            setFile({ ...file!, status: 'uploading' })

            const formData = new FormData();
            formData.append('file', fileItem.file);
            formData.append('filename', fileItem.file.name);

            // 使用 XMLHttpRequest 以便监听上传进度
            await uploadWithProgress(formData, fileItem.id);
            setFile({ ...file!, progress: 100, status: 'success', url: 'https://picx.zhimg.com/v2-ed005842502c6cb29590c2e38d5a1d0b_1440w.jpg' });
            // 上传成功
        } catch (error) {
            console.error('上传失败:', error);
            setFile({ ...file!, status: 'error' })
        }
        // setIsUploading(false);
    }
    const uploadWithProgress = (formData: FormData, fileId: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            // 监听上传进度
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    setFile({ ...file!, progress })
                    onUploadProgress?.(fileId, progress);
                }
            });

            // 监听完成事件
            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        console.log('xhr', xhr.responseText)
                        resolve({ success: true, });
                    } catch (error) {
                        console.error('xhr', error)
                        resolve({ success: true, url: '11' });
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
    const handleClick = () => {
        if (file?.status === 'success') return;
        fileInputRef.current?.click();
    }
    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        // setIsUploading(true);
    }, []);
    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        // setIsUploading(false);
    }, []);
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        if (file?.status === 'success') return;
        e.preventDefault();
        // setIsUploading(false);
        addFiles(e.dataTransfer.files);
    };
    const clearFile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setFile(undefined);
        // props.deleteCallback && props.deleteCallback();
    }
    return (
        <div className={cn(
            'flex flex-col gap-2 ',
        )}>
            <div className={cn(
                'flex flex-row gap-2 justify-between',
                'px-[9px] py-[8px]',
                'bg-fill',
                file?.status === 'error' && 'bg-danger-light'
            )}>
                <div className={cn(
                    'inline-flex flex-row gap-2 '
                )}>
                    <div
                        className={cn(
                            'cursor-pointer',
                        )}
                        onClick={handleClick}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <img src={(file && file.url) ? file.url : 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/492998098_1286134549535445_4624770101311285693_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q8tvgQ04p24Q7kNvwG8DI8J&_nc_oc=AdmnQ-IKflZtygJweisV7hJWlSBavnoz1o0KTqGEz5NEwdtFaqPQ7NgApt56Mpy3nLQ&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=XeLpPDZ8e4qwh-tQ-IfeCg&oh=00_AfUaqWEjlnR-IzVMWG-5Y-5K1ZwdM6sHJ8xrgL8VTOWcYA&oe=68B9E39A'} width={48} height={48} />
                        <input
                            ref={fileInputRef}
                            type="file"
                            name="files[]"
                            onChange={handleFileChange}
                            className="hidden"
                            accept={props.acceptedTypes} />
                    </div>
                    <div className="inline-flex flex-col gap-1 w-full">
                        <span className="text-[13px] leading-[20px] text-text-deep line-clamp-1">{imageName}</span>
                        <span className="text-[12px] leading-[20px] text-secondary-information line-clamp-1">辅助信息：{information}</span>
                    </div>
                </div>
                <div className={cn(
                    'flex flex-row items-center gap-2'
                )}>
                    {file?.status === 'uploading'
                        &&
                        <Progress variant={'default'} size={'md'} value={file.progress} className="w-20 h-1 bg-[#e1e3ec]" />
                    }
                    {file?.status === 'uploading'
                        &&
                        <Button variant={'link'} size={'link'} className="text-[11px] leading-[16px]" onClick={(e) => { clearFile(e) }}>
                            取消上传
                        </Button>
                    }
                    {file?.status === 'success'
                        &&
                        <SuccessIcon className="size-3" />
                    }
                    {file?.status === 'error'
                        &&
                        <CloseIcon className="size-3 text-danger" />
                    }
                    {(file?.status === 'success' || file?.status === 'error')
                        &&
                        <Button variant={'link'} size={'link'} className="text-[11px] leading-[16px]" onClick={(e) => { clearFile(e) }}>
                            <DeleteIcon className="size-3 text-secondary" />
                        </Button>
                    }

                </div>
            </div>
            <span className={cn(
                "text-secondary-information text-[13px] leading-[20PX]",
                file?.status === 'error' && 'text-danger'
            )}>
                {desc}
            </span>
        </div>
    );

}

export { Upload, DragUpload, AvatarUpload, AvatarFrame };