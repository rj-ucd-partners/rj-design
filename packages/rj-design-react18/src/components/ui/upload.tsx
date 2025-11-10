import { cn } from "@/lib/utils";
import React, { useState, useRef, useCallback, type JSX } from "react";
import { Progress } from "./progress";
import { Button } from "./button";
import { SuccessIcon } from "../icon/successIcon";
import { AbnormalIcon } from "../icon/abnormalIcon";
import { FileIcon } from "../icon/file-icon";
import { Separator } from "./separator";
import { DeleteIcon } from "../icon/delete-icon";
import { EyeIcon } from "../icon/eye-icon";
import { CloseIcon } from "../icon/closeIcon";
import { LoadingCircle } from "../icon/loading-circle";

export interface FileItem {
    file: File;
    id: string;
    status: 'waiting' | 'uploading' | 'success' | 'error';
    progress: number;
    url?: string;
    error?: string;
}

interface UploadProps extends React.ComponentProps<'div'> {
    desc: string;
    // 文件列表（受控）
    files?: FileItem[];
    // 文件选择回调（用户在此实现上传逻辑）
    onFilesSelect?: (files: File[]) => void;
    // 移除文件回调
    onFileRemove?: (fileId: string) => void;
    // 重试上传回调
    onFileRetry?: (fileId: string) => void;
    maxFileSize?: number; // MB
    acceptedTypes?: string;
    multiple?: boolean;
}

interface DragUploadProps extends UploadProps {
    // 可选：自定义拖拽区域文本
    dragText?: string | React.ReactNode | JSX.Element;
}

interface AvatarUploadProps extends Omit<UploadProps, 'files' | 'multiple'> {
    // 单个文件（受控）
    file?: FileItem;
    // 预览回调
    onPreview?: () => void;
    // 删除回调
    onDelete?: () => void;
}

interface AvatarFrameProps extends AvatarUploadProps {
    imageName?: string;
    information?: string;
}

function UploadItem({
    className,
    file,
    onRemove,
    onRetry,
    ...props
}: React.ComponentProps<'div'> & {
    file: FileItem;
    onRemove?: (fileId: string) => void;
    onRetry?: (fileId: string) => void;
}) {
    return (
        <div className={cn(
            "w-full flex flex-row items-center gap-2",
            className
        )} {...props}>
            <div className="flex flex-row items-center gap-2">
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
                    <LoadingCircle className="size-3 animate-spin" />

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
                    <SuccessIcon className="size-4 text-success" />
                }
                {
                    file.status === 'error' &&
                    <div className="flex flex-row items-center gap-1">
                        {onRetry && (
                            <Button variant={'link'} size={'link'} onClick={() => onRetry(file.id)} className="text-[12px]">
                                点击重试
                            </Button>
                        )}
                        <AbnormalIcon className="size-4 text-abnormal" />
                    </div>
                }
                {onRemove && (
                    <Button variant={'transparent'} size={'link'} onClick={() => onRemove(file.id)}>
                        <DeleteIcon className="text-secondary size-4" />
                    </Button>
                )}
            </div>
        </div >
    );
}

function Upload({
    desc,
    className,
    files = [],
    onFilesSelect,
    onFileRemove,
    onFileRetry,
    multiple = false,
    maxFileSize = 100,
    acceptedTypes = "*/*",
    ...props
}: UploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSelecting, setIsSelecting] = useState(false);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (!selectedFiles || selectedFiles.length === 0) return;

        const fileArray = Array.from(selectedFiles);

        // 文件大小验证
        const validFiles = fileArray.filter(file => {
            const sizeMB = file.size / (1024 * 1024);
            if (sizeMB > maxFileSize) {
                alert(`文件 ${file.name} 超过 ${maxFileSize}MB 限制`);
                return false;
            }
            return true;
        });

        if (validFiles.length > 0) {
            onFilesSelect?.(validFiles);
        }

        // 清空input,允许选择相同文件再次触发onChange
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setIsSelecting(false);
    };

    const handleClick = () => {
        setIsSelecting(true);
        fileInputRef.current?.click();
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
                <div
                    onClick={handleClick}
                    className={cn(
                        'inline-flex flex-row items-center justify-center gap-1',
                        'bg-primary text-text hover:bg-primary-hover active:bg-primary-active',
                        'rounded-md cursor-pointer transition-colors',
                        'px-3 py-1 h-8',
                        isSelecting && 'opacity-50 cursor-not-allowed'
                    )}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9981 6.12552C11.9994 6.08384 12 6.042 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 6.04199 4.00065 6.08384 4.00193 6.12552C2.27572 6.56889 1 8.13547 1 10C1 12.2091 2.79086 14 5 14H11C13.2091 14 15 12.2091 15 10C15 8.13546 13.7243 6.56889 11.9981 6.12552ZM7.63968 6.01454C7.83983 5.75453 8.23193 5.75453 8.43209 6.01454L10.8803 9.19486C11.1334 9.52364 10.899 9.99986 10.4841 9.99986H8.79999L8.79994 13.9999L7.19994 13.9998L7.19999 9.99986H5.58767C5.17275 9.99986 4.93837 9.52364 5.19147 9.19486L7.63968 6.01454Z" fill="currentColor" />
                    </svg>
                    <span className="font-normal not-italic text-[13px] leading-[20px]">
                        上传文件
                    </span>
                </div>
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
                        <UploadItem
                            key={fileItem.id}
                            file={fileItem}
                            onRemove={onFileRemove}
                            onRetry={onFileRetry}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function DragUpload({
    desc,
    files = [],
    onFilesSelect,
    onFileRemove,
    onFileRetry,
    maxFileSize = 100,
    acceptedTypes = "*/*",
    multiple = false,
    dragText = "点击上传 / 拖拽到此区域",
    className,
    ...props
}: DragUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const validateAndSelectFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles || newFiles.length === 0) return;

        const fileArray = Array.from(newFiles);
        const validFiles = fileArray.filter(file => {
            const sizeMB = file.size / (1024 * 1024);
            if (sizeMB > maxFileSize) {
                alert(`文件 ${file.name} 超过最大限制 ${maxFileSize}MB`);
                return false;
            }
            return true;
        });

        if (validFiles.length > 0) {
            onFilesSelect?.(validFiles);
        }
    }, [maxFileSize, onFilesSelect]);

    const handleClick = useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        validateAndSelectFiles(e.target.files);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [validateAndSelectFiles]);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        validateAndSelectFiles(e.dataTransfer.files);
    }, [validateAndSelectFiles]);

    return (
        <div className={cn(
            "flex flex-col w-full h-full gap-2",
            className
        )} {...props}>
            <div>
                <div className={cn(
                    'flex flex-col items-center justify-center gap-2 bg-fill-dark-hover-active-disabled flex-1',
                    'hover:border hover:border-dashed hover:border-primary',
                    'rounded cursor-pointer',
                    'h-[120px]',
                    isDragging && 'border border-dashed border-primary bg-primary-light'
                )}
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <FileIcon />
                    <p className="text-secondary-information">
                        {
                            (typeof dragText === 'string') ?
                                <span className="text-primary font-medium">
                                    {dragText}
                                </span> :
                                dragText
                        }

                    </p>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    name="files[]"
                    multiple={multiple}
                    onChange={handleFileChange}
                    className="hidden"
                    accept={acceptedTypes}
                />
            </div>

            <span className="text-[13px] leading-[20px] text-secondary-information">
                {desc}
            </span>

            {files.length > 0 && (
                <div className="mt-2 space-y-2 bg-fill p-1">
                    {files.map(file => (
                        <UploadItem
                            key={file.id}
                            file={file}
                            onRemove={onFileRemove}
                            onRetry={onFileRetry}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function AvatarUpload({
    desc,
    file,
    onFilesSelect,
    onPreview,
    onDelete,
    maxFileSize = 10,
    acceptedTypes = "image/*",
    className,
    ...props
}: AvatarUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const validateAndSelectFile = useCallback((newFiles: FileList | null) => {
        if (!newFiles || newFiles.length === 0) return;

        const selectedFile = newFiles[0];
        const sizeMB = selectedFile.size / (1024 * 1024);

        if (sizeMB > maxFileSize) {
            alert(`文件 ${selectedFile.name} 超过最大限制 ${maxFileSize}MB`);
            return;
        }

        onFilesSelect?.([selectedFile]);
    }, [maxFileSize, onFilesSelect]);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        validateAndSelectFile(e.target.files);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [validateAndSelectFile]);

    const handleClick = () => {
        if (file?.status === 'success') return;
        fileInputRef.current?.click();
    };

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (file?.status !== 'success') {
            setIsDragging(true);
        }
    }, [file?.status]);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (file?.status === 'success') return;
        validateAndSelectFile(e.dataTransfer.files);
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onDelete?.();
    };

    return (
        <div className={cn(
            'flex flex-col items-start gap-1',
        )} {...props}>
            <div className={cn(
                'w-30 h-30',
                'relative flex flex-col items-center justify-center gap-2.5',
                'bg-fill-dark-hover-active-disabled',
                'cursor-pointer',
                !file && 'hover:border hover:border-dashed hover:border-primary',
                file?.status === 'error' && 'bg-danger-light',
                isDragging && 'border border-dashed border-primary',
                'hover:[&_[data-slot=mask]]:flex',
                className
            )}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {!file && (
                    <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 8.5H11.5V11.5H8.5V12.5H11.5V15.5H12.5V12.5H15.5V11.5H12.5V8.5Z" fill="#C0C7CF" />
                        </svg>
                        <span className="text-[12px] leading-[20px] font-normal text-secondary-information">
                            点击上传图片
                        </span>
                    </>
                )}

                {file?.status === 'uploading' && (
                    <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-[12px] leading-[20px] font-normal text-secondary-information">
                            上传中
                        </span>
                        <Progress variant={'default'} size={'sm'} value={file.progress} className="w-20 h-[2px]" />
                    </div>
                )}

                {file?.status === 'success' && file.url && (
                    <img src={file.url} className="w-full h-full object-cover" alt="uploaded" />
                )}

                {file?.status === 'error' && (
                    <div className="flex gap-2 flex-col items-center justify-center text-danger text-[12px] leading-[20px]">
                        <CloseIcon className="size-4 text-secondary-information" />
                        <span>{file.error || '上传失败'}</span>
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    name="files[]"
                    onChange={handleFileChange}
                    className="hidden"
                    accept={acceptedTypes}
                />

                {file?.status === 'success' && (
                    <div data-slot='mask' className="z-10 w-full h-full absolute hidden bg-mask flex items-center justify-center">
                        <div className="flex h-[16px] flex-row items-center justify-center gap-3">
                            {onPreview && (
                                <Button variant={'transparent'} size={'link'} onClick={(e) => { e.stopPropagation(); onPreview(); }}>
                                    <EyeIcon className="size-4" />
                                </Button>
                            )}
                            {onPreview && onDelete && (
                                <Separator orientation={'vertical'} className="h-full bg-border-split" />
                            )}
                            {onDelete && (
                                <Button variant={'transparent'} size={'link'} onClick={handleDelete}>
                                    <DeleteIcon width={17} height={16} />
                                </Button>
                            )}
                        </div>
                    </div>
                )}
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
    file,
    onFilesSelect,
    onDelete,
    maxFileSize = 10,
    acceptedTypes = "image/*",
    imageName = "图片名称",
    information = 'XXXX',
    ...props
}: AvatarFrameProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const validateAndSelectFile = useCallback((newFiles: FileList | null) => {
        if (!newFiles || newFiles.length === 0) return;

        const selectedFile = newFiles[0];
        const sizeMB = selectedFile.size / (1024 * 1024);

        if (sizeMB > maxFileSize) {
            alert(`文件 ${selectedFile.name} 超过最大限制 ${maxFileSize}MB`);
            return;
        }

        onFilesSelect?.([selectedFile]);
    }, [maxFileSize, onFilesSelect]);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        validateAndSelectFile(e.target.files);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [validateAndSelectFile]);

    const handleClick = () => {
        if (file?.status === 'success') return;
        fileInputRef.current?.click();
    };

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (file?.status !== 'success') {
            setIsDragging(true);
        }
    }, [file?.status]);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (file?.status === 'success') return;
        validateAndSelectFile(e.dataTransfer.files);
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onDelete?.();
    };

    // 默认占位图片
    const defaultImage = 'https://via.placeholder.com/48';

    return (
        <div className={cn(
            'flex flex-col gap-2',
        )} {...props}>
            <div className={cn(
                'flex flex-row gap-2 justify-between',
                'px-[9px] py-[8px]',
                'bg-fill',
                file?.status === 'error' && 'bg-danger-light',
                isDragging && 'border border-primary'
            )}>
                <div className={cn(
                    'inline-flex flex-row gap-2'
                )}>
                    <div
                        className={cn(
                            'cursor-pointer flex-shrink-0',
                        )}
                        onClick={handleClick}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <img
                            src={file?.url || defaultImage}
                            width={48}
                            height={48}
                            className="object-cover rounded"
                            alt={imageName}
                        />
                        <input
                            ref={fileInputRef}
                            type="file"
                            name="files[]"
                            onChange={handleFileChange}
                            className="hidden"
                            accept={acceptedTypes}
                        />
                    </div>
                    <div className="inline-flex flex-col gap-1 w-full overflow-hidden">
                        <span className="text-[13px] leading-[20px] text-text-deep line-clamp-1">
                            {imageName}
                        </span>
                        <span className="text-[12px] leading-[20px] text-secondary-information line-clamp-1">
                            辅助信息：{information}
                        </span>
                    </div>
                </div>

                <div className={cn(
                    'flex flex-row items-center gap-2 flex-shrink-0'
                )}>
                    {file?.status === 'uploading' && (
                        <>
                            <Progress
                                variant={'default'}
                                size={'md'}
                                value={file.progress}
                                className="w-20 h-1 bg-[#e1e3ec]"
                            />
                            <Button
                                variant={'link'}
                                size={'link'}
                                className="text-[11px] leading-[16px]"
                                onClick={handleDelete}
                            >
                                取消上传
                            </Button>
                        </>
                    )}

                    {file?.status === 'success' && (
                        <>
                            <SuccessIcon className="size-3 text-success" />
                            {onDelete && (
                                <Button
                                    variant={'link'}
                                    size={'link'}
                                    className="text-[11px] leading-[16px]"
                                    onClick={handleDelete}
                                >
                                    <DeleteIcon className="size-3 text-secondary" />
                                </Button>
                            )}
                        </>
                    )}

                    {file?.status === 'error' && (
                        <>
                            <CloseIcon className="size-3 text-danger" />
                            {onDelete && (
                                <Button
                                    variant={'link'}
                                    size={'link'}
                                    className="text-[11px] leading-[16px]"
                                    onClick={handleDelete}
                                >
                                    <DeleteIcon className="size-3 text-secondary" />
                                </Button>
                            )}
                        </>
                    )}
                </div>
            </div>

            <span className={cn(
                "text-secondary-information text-[13px] leading-[20px]",
                file?.status === 'error' && 'text-danger'
            )}>
                {desc}
            </span>
        </div>
    );
}

// 图片墙组件 - 基于Figma设计，每行4张，最多10张（上下各5张）
interface ImageWallProps extends Omit<UploadProps, 'files'> {
    files?: FileItem[];
    maxCount?: number; // 最大图片数量
    dragText?: string | React.ReactNode | JSX.Element;
}

function ImageWall({
    desc,
    files = [],
    onFilesSelect,
    onFileRemove,
    onFileRetry,
    maxFileSize = 10,
    acceptedTypes = "image/*",
    multiple = true,
    maxCount = 8,
    dragText = "点击上传 / 拖拽到此区域",
    className,
    ...props
}: ImageWallProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const validateAndSelectFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles || newFiles.length === 0) return;

        const fileArray = Array.from(newFiles);

        // 检查是否超出最大数量
        const remainingSlots = maxCount - files.length;
        if (remainingSlots <= 0) {
            alert(`最多只能上传 ${maxCount} 张图片`);
            return;
        }

        const filesToUpload = fileArray.slice(0, remainingSlots);

        // 验证文件大小和类型
        const validFiles = filesToUpload.filter(file => {
            const sizeMB = file.size / (1024 * 1024);
            if (sizeMB > maxFileSize) {
                alert(`文件 ${file.name} 超过最大限制 ${maxFileSize}MB`);
                return false;
            }
            // 验证是否为图片
            if (!file.type.startsWith('image/')) {
                alert(`文件 ${file.name} 不是图片格式`);
                return false;
            }
            return true;
        });

        if (validFiles.length > 0) {
            onFilesSelect?.(validFiles);
        }
    }, [maxFileSize, maxCount, files.length, onFilesSelect]);

    const handleClick = useCallback(() => {
        if (files.length >= maxCount) {
            alert(`最多只能上传 ${maxCount} 张图片`);
            return;
        }
        fileInputRef.current?.click();
    }, [files.length, maxCount]);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        validateAndSelectFiles(e.target.files);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [validateAndSelectFiles]);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (files.length < maxCount) {
            setIsDragging(true);
        }
    }, [files.length, maxCount]);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        validateAndSelectFiles(e.dataTransfer.files);
    }, [validateAndSelectFiles]);

    const handleRemove = useCallback((fileId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        onFileRemove?.(fileId);
    }, [onFileRemove]);

    // 如果没有图片，显示拖拽上传区域
    if (files.length === 0) {
        return (
            <div className={cn("flex flex-col w-full gap-2", className)} {...props}>
                <div
                    className={cn(
                        'flex flex-col items-center justify-center gap-2',
                        'bg-fill-dark-hover-active-disabled rounded cursor-pointer',
                        'border border-dashed border-transparent',
                        'hover:border-primary transition-colors',
                        'h-[120px]',
                        isDragging && 'border-primary bg-fill-hover'
                    )}
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <FileIcon className="text-secondary-information" />
                    <p className="text-[13px] text-secondary-information text-center px-2">
                        {typeof dragText === 'string' ? (
                            <span className="text-primary font-medium">{dragText}</span>
                        ) : (
                            dragText
                        )}
                    </p>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    name="files[]"
                    multiple={multiple}
                    onChange={handleFileChange}
                    className="hidden"
                    accept={acceptedTypes}
                />

                <span className="text-[13px] leading-[20px] text-secondary-information">
                    {desc}
                </span>
            </div>
        );
    }

    // 有图片时，显示图片墙网格（每行4张）
    return (
        <div>
            <div className={cn("flex flex-col w-full gap-2 border border-dashed border-border p-3", className)} {...props}>
                {/* 图片墙网格 - 4列布局 */}
                <div
                    className={cn(
                        "grid grid-cols-4 gap-2",
                        isDragging && "opacity-80"
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {files.map((fileItem) => (
                        <div
                            key={fileItem.id}
                            className="flex flex-col gap-2"
                        >
                            {/* 图片容器 120x120 */}
                            <div className="relative w-[120px] h-[120px] bg-fill-dark-hover-active-disabled  overflow-hidden group">
                                {/* 等待状态 */}
                                {fileItem.status === 'waiting' && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <LoadingCircle className="size-6 animate-spin text-primary" />
                                    </div>
                                )}

                                {/* 上传中状态 */}
                                {fileItem.status === 'uploading' && (
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
                                        <LoadingCircle className="size-5 animate-spin text-primary" />
                                        <div className="w-full">
                                            <Progress variant={'default'} value={fileItem.progress} className="w-full h-1" />
                                        </div>
                                        <span className="text-[12px] text-secondary-information">{fileItem.progress}%</span>
                                    </div>
                                )}

                                {/* 成功状态 - 显示图片 */}
                                {fileItem.status === 'success' && fileItem.url && (
                                    <>
                                        <img
                                            src={fileItem.url}
                                            alt={fileItem.file.name}
                                            className="w-full h-full object-contain"
                                        />
                                        {/* 遮罩层和删除按钮 */}
                                        <div className="absolute inset-0 bg-mask opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button
                                                variant={'transparent'}
                                                size={'link'}
                                                onClick={(e) => handleRemove(fileItem.id, e)}
                                                className="text-text"
                                            >
                                                <DeleteIcon className="size-4" />
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {/* 失败状态 */}
                                {fileItem.status === 'error' && (
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
                                        <CloseIcon className="size-4 text-danger" />
                                        <span className="text-[10px] text-danger text-center line-clamp-2">
                                            上传失败
                                        </span>
                                        {onFileRetry && (
                                            <Button
                                                variant={'link'}
                                                size={'link'}
                                                onClick={() => onFileRetry(fileItem.id)}
                                                className="text-[11px] h-auto p-0"
                                            >
                                                重试
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* 文件名 */}
                            <span className="text-[12px]  leading-[20px] truncate w-[120px]">
                                {fileItem.file.name}
                            </span>
                        </div>
                    ))}

                    {/* 上传按钮 - 当未达到最大数量时显示 */}
                    {files.length < maxCount && (
                        <div className="flex flex-col gap-2">
                            <div
                                className={cn(
                                    'w-[120px] h-[120px] flex flex-col items-center justify-center gap-2',
                                    'bg-fill-dark-hover-active-disabled cursor-pointer',
                                    'border border-dashed border-transparent',
                                    'hover:border-primary transition-colors',
                                    isDragging && 'border-primary bg-fill-hover'
                                )}
                                onClick={handleClick}
                            >
                                <FileIcon className="text-secondary-information size-8" />
                                <span className="text-[12px] text-primary font-medium">点击上传</span>
                            </div>
                            <span className="text-[12px] text-transparent leading-[20px]">-</span>
                        </div>
                    )}
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    name="files[]"
                    multiple={multiple}
                    onChange={handleFileChange}
                    className="hidden"
                    accept={acceptedTypes}
                />


            </div>
            <span className="text-[13px] leading-[20px] text-secondary-information">
                {desc} (已上传 {files.length}/{maxCount} 张，最大 {maxFileSize}MB/张)
            </span>
        </div>

    );
}

export { Upload, DragUpload, AvatarUpload, AvatarFrame, ImageWall };