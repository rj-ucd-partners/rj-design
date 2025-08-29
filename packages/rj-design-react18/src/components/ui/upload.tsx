import { cn } from "@/lib/utils";
import { Label } from "./label";


function Upload({
    desc,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    desc: string,
}) {
    return (
        <form id="uploadForm" encType="multipart/form-data">
            <div className={cn(
                'flex flex-col items-start justify-start gap-2',
                className
            )} {...props}>
                <input
                    type="file"
                    id="fileInput"
                    name="files[]"
                    multiple
                    className="hidden"
                />
                <Label htmlFor={'fileInput'}>
                    <div className={cn(
                        'inline-flex flex-row items-center justify-center gap-1',
                        'bg-primary text-text hover:bg-primary-hover active:bg-primary-active ',
                        'rounded-md',
                        'px-3 py-1 h-8',
                    )}>
                        {
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9981 6.12552C11.9994 6.08384 12 6.042 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 6.04199 4.00065 6.08384 4.00193 6.12552C2.27572 6.56889 1 8.13547 1 10C1 12.2091 2.79086 14 5 14H11C13.2091 14 15 12.2091 15 10C15 8.13546 13.7243 6.56889 11.9981 6.12552ZM7.63968 6.01454C7.83983 5.75453 8.23193 5.75453 8.43209 6.01454L10.8803 9.19486C11.1334 9.52364 10.899 9.99986 10.4841 9.99986H8.79999L8.79994 13.9999L7.19994 13.9998L7.19999 9.99986H5.58767C5.17275 9.99986 4.93837 9.52364 5.19147 9.19486L7.63968 6.01454Z" fill="#08121A" />
                            </svg>
                        }
                        <span className="font-normal not-italic text-[13px] leading-[20px]">上传文件</span>
                    </div>
                </Label>
                <span className="text-[13px] leading-[20px] text-secondary-information">{desc}</span>
            </div>
        </form>
    );
}
// import { cn } from "@/lib/utils";
// import { Label } from "./label";
// import { useState, useRef } from "react";

// interface FileItem {
//     file: File;
//     id: string;
//     status: 'pending' | 'uploading' | 'completed' | 'error';
//     progress: number;
//     url?: string;
// }

// interface UploadProps extends React.ComponentProps<'div'> {
//     desc: string;
//     onUploadComplete?: (files: FileItem[]) => void;
//     onUploadProgress?: (fileId: string, progress: number) => void;
//     maxFileSize?: number; // MB
//     acceptedTypes?: string;
//     uploadUrl?: string;
// }

// function Upload({
//     desc,
//     className,
//     onUploadComplete,
//     onUploadProgress,
//     maxFileSize = 10,
//     acceptedTypes = "*/*",
//     uploadUrl = "http://localhost:3001/api/upload",
//     ...props
// }: UploadProps) {
//     const [files, setFiles] = useState<FileItem[]>([]);
//     const [isUploading, setIsUploading] = useState(false);
//     const fileInputRef = useRef<HTMLInputElement>(null);

//     const formatFileSize = (bytes: number): string => {
//         if (bytes === 0) return '0 Bytes';
//         const k = 1024;
//         const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//         const i = Math.floor(Math.log(bytes) / Math.log(k));
//         return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//     };

//     const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const selectedFiles = e.target.files;
//         if (!selectedFiles) return;

//         const newFiles: FileItem[] = Array.from(selectedFiles)
//             .filter(file => {
//                 const sizeMB = file.size / (1024 * 1024);
//                 if (sizeMB > maxFileSize) {
//                     alert(`文件 ${file.name} 超过 ${maxFileSize}MB 限制`);
//                     return false;
//                 }
//                 return true;
//             })
//             .map(file => ({
//                 file,
//                 id: Date.now() + Math.random().toString(),
//                 status: 'pending',
//                 progress: 0
//             }));

//         setFiles(prev => [...prev, ...newFiles]);

//         // 自动开始上传
//         if (newFiles.length > 0) {
//             uploadFiles(newFiles);
//         }
//     };

//     const uploadFiles = async (filesToUpload?: FileItem[]) => {
//         const targetFiles = filesToUpload || files.filter(f => f.status === 'pending');
//         if (targetFiles.length === 0) return;

//         setIsUploading(true);

//         for (const fileItem of targetFiles) {
//             await uploadSingleFile(fileItem);
//         }

//         setIsUploading(false);
//         const completedFiles = files.filter(f => f.status === 'completed');
//         onUploadComplete?.(completedFiles);
//     };

//     const uploadSingleFile = async (fileItem: FileItem) => {
//         try {
//             // 更新状态为上传中
//             setFiles(prev => prev.map(item =>
//                 item.id === fileItem.id ? { ...item, status: 'uploading' } : item
//             ));

//             const formData = new FormData();
//             formData.append('file', fileItem.file);
//             formData.append('filename', fileItem.file.name);

//             // 使用 XMLHttpRequest 以便监听上传进度
//             const response = await uploadWithProgress(formData, fileItem.id);

//             // 上传成功
//             setFiles(prev => prev.map(item =>
//                 item.id === fileItem.id 
//                     ? { ...item, status: 'completed', progress: 100, url: response.url }
//                     : item
//             ));

//         } catch (error) {
//             console.error('上传失败:', error);
//             setFiles(prev => prev.map(item =>
//                 item.id === fileItem.id ? { ...item, status: 'error' } : item
//             ));
//         }
//     };

//     const uploadWithProgress = (formData: FormData, fileId: string): Promise<any> => {
//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();

//             // 监听上传进度
//             xhr.upload.addEventListener('progress', (event) => {
//                 if (event.lengthComputable) {
//                     const progress = Math.round((event.loaded / event.total) * 100);
//                     setFiles(prev => prev.map(item =>
//                         item.id === fileId ? { ...item, progress } : item
//                     ));
//                     onUploadProgress?.(fileId, progress);
//                 }
//             });

//             // 监听完成事件
//             xhr.addEventListener('load', () => {
//                 if (xhr.status >= 200 && xhr.status < 300) {
//                     try {
//                         const response = JSON.parse(xhr.responseText);
//                         resolve(response);
//                     } catch (e) {
//                         resolve({ success: true, url: '' });
//                     }
//                 } else {
//                     reject(new Error(`Upload failed: ${xhr.status}`));
//                 }
//             });

//             // 监听错误事件
//             xhr.addEventListener('error', () => {
//                 reject(new Error('Upload failed'));
//             });

//             // 发送请求
//             xhr.open('POST', uploadUrl);
//             xhr.send(formData);
//         });
//     };

//     const removeFile = (fileId: string) => {
//         setFiles(prev => prev.filter(item => item.id !== fileId));
//     };

//     const retryUpload = (fileId: string) => {
//         const fileToRetry = files.find(f => f.id === fileId);
//         if (fileToRetry) {
//             setFiles(prev => prev.map(item =>
//                 item.id === fileId ? { ...item, status: 'pending', progress: 0 } : item
//             ));
//             uploadSingleFile({ ...fileToRetry, status: 'pending', progress: 0 });
//         }
//     };

//     return (
//         <div className={cn(
//             'flex flex-col items-start justify-start gap-2',
//             className
//         )} {...props}>
//             <form encType="multipart/form-data">
//                 <input
//                     ref={fileInputRef}
//                     type="file"
//                     id="fileInput"
//                     name="files[]"
//                     multiple
//                     accept={acceptedTypes}
//                     onChange={handleFileSelect}
//                     className="hidden"
//                 />
//                 <Label htmlFor={'fileInput'}>
//                     <div className={cn(
//                         'inline-flex flex-row items-center justify-center gap-1',
//                         'bg-primary text-text hover:bg-primary-hover active:bg-primary-active',
//                         'rounded-md cursor-pointer transition-colors',
//                         'px-3 py-1 h-8',
//                         isUploading && 'opacity-50 cursor-not-allowed'
//                     )}>
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M11.9981 6.12552C11.9994 6.08384 12 6.042 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 6.04199 4.00065 6.08384 4.00193 6.12552C2.27572 6.56889 1 8.13547 1 10C1 12.2091 2.79086 14 5 14H11C13.2091 14 15 12.2091 15 10C15 8.13546 13.7243 6.56889 11.9981 6.12552ZM7.63968 6.01454C7.83983 5.75453 8.23193 5.75453 8.43209 6.01454L10.8803 9.19486C11.1334 9.52364 10.899 9.99986 10.4841 9.99986H8.79999L8.79994 13.9999L7.19994 13.9998L7.19999 9.99986H5.58767C5.17275 9.99986 4.93837 9.52364 5.19147 9.19486L7.63968 6.01454Z" fill="currentColor" />
//                         </svg>
//                         <span className="font-normal not-italic text-[13px] leading-[20px]">
//                             {isUploading ? '上传中...' : '上传文件'}
//                         </span>
//                     </div>
//                 </Label>
//             </form>

//             <div className="flex flex-1 w-full">
//                 <span className="text-[13px] leading-[20px] text-secondary-information">
//                     {desc} (最大 {maxFileSize}MB)
//                 </span>
//             </div>

//             {/* 文件列表 */}
//             {files.length > 0 && (
//                 <div className="w-full mt-4 space-y-2">
//                     {files.map(fileItem => (
//                         <div key={fileItem.id} className="border rounded-md p-3 bg-gray-50">
//                             <div className="flex justify-between items-start mb-2">
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-900 truncate">
//                                         {fileItem.file.name}
//                                     </p>
//                                     <p className="text-xs text-gray-500">
//                                         {formatFileSize(fileItem.file.size)}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-center gap-2 ml-4">
//                                     <StatusIcon status={fileItem.status} />
//                                     {fileItem.status === 'error' && (
//                                         <button
//                                             onClick={() => retryUpload(fileItem.id)}
//                                             className="text-xs text-blue-600 hover:text-blue-800"
//                                         >
//                                             重试
//                                         </button>
//                                     )}
//                                     <button
//                                         onClick={() => removeFile(fileItem.id)}
//                                         className="text-xs text-red-600 hover:text-red-800"
//                                         disabled={fileItem.status === 'uploading'}
//                                     >
//                                         删除
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* 进度条 */}
//                             {fileItem.status === 'uploading' && (
//                                 <div className="w-full bg-gray-200 rounded-full h-2">
//                                     <div
//                                         className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//                                         style={{ width: `${fileItem.progress}%` }}
//                                     ></div>
//                                 </div>
//                             )}

//                             {/* 状态文本 */}
//                             <div className="mt-1">
//                                 <span className="text-xs text-gray-600">
//                                     {fileItem.status === 'pending' && '等待上传'}
//                                     {fileItem.status === 'uploading' && `上传中 ${fileItem.progress}%`}
//                                     {fileItem.status === 'completed' && '上传完成'}
//                                     {fileItem.status === 'error' && '上传失败'}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// // 状态图标组件
// function StatusIcon({ status }: { status: FileItem['status'] }) {
//     const iconClass = "w-4 h-4";

//     switch (status) {
//         case 'pending':
//             return <div className={cn(iconClass, "bg-gray-400 rounded-full")} />;
//         case 'uploading':
//             return (
//                 <div className={cn(iconClass, "border-2 border-blue-600 border-t-transparent rounded-full animate-spin")} />
//             );
//         case 'completed':
//             return (
//                 <svg className={cn(iconClass, "text-green-600")} fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//             );
//         case 'error':
//             return (
//                 <svg className={cn(iconClass, "text-red-600")} fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//             );
//         default:
//             return null;
//     }
// }

// export { Upload };
export { Upload };