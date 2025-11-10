import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { AvatarFrame, AvatarUpload, DragUpload, Upload, ImageWall, type FileItem } from "./upload"

const meta: Meta<typeof Upload> = {
    title: 'Components/Upload',
    tags: ['autodocs'],
    component: Upload,
    argTypes: {
        desc: { control: 'text' },
        multiple: { control: 'boolean' },
        maxFileSize: { control: 'number' },
        acceptedTypes: { control: 'text' },
    },
}

export default meta

type Story = StoryObj<typeof Upload>

// 模拟上传函数（单数索引成功，双数索引失败）
const simulateUpload = async (
    fileItem: FileItem,
    setFiles: React.Dispatch<React.SetStateAction<FileItem[]>>,
    fileIndex: number
) => {
    // 更新为上传中状态
    setFiles(prev => prev.map(item =>
        item.id === fileItem.id ? { ...item, status: 'uploading' } : item
    ));

    // 模拟进度更新
    for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFiles(prev => prev.map(item =>
            item.id === fileItem.id ? { ...item, progress: i } : item
        ));
    }

    // 单数索引(1,3,5...)成功，双数索引(0,2,4...)失败
    const isSuccess = fileIndex % 2 === 1;

    setFiles(prev => prev.map(item =>
        item.id === fileItem.id
            ? {
                ...item,
                status: isSuccess ? 'success' : 'error',
                progress: 100,
                url: isSuccess ? URL.createObjectURL(fileItem.file) : undefined,
                error: isSuccess ? undefined : '上传失败，请重试'
            }
            : item
    ));
};

// 单文件上传
export const Primary: Story = {
    render: () => {
        const [files, setFiles] = useState<FileItem[]>([]);

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const newFileItems: FileItem[] = selectedFiles.map(file => ({
                id: Date.now() + Math.random().toString(),
                file,
                status: 'waiting' as const,
                progress: 0
            }));

            setFiles(prev => [...prev, ...newFileItems]);

            // 获取当前文件列表长度作为起始索引
            const startIndex = files.length;
            for (let i = 0; i < newFileItems.length; i++) {
                await simulateUpload(newFileItems[i], setFiles, startIndex + i);
            }
        };

        const handleFileRemove = (fileId: string) => {
            setFiles(prev => prev.filter(item => item.id !== fileId));
        };

        const handleFileRetry = async (fileId: string) => {
            const fileToRetry = files.find(f => f.id === fileId);
            if (fileToRetry) {
                // 获取该文件在列表中的索引
                const fileIndex = files.findIndex(f => f.id === fileId);
                setFiles(prev => prev.map(item =>
                    item.id === fileId ? { ...item, status: 'waiting', progress: 0 } : item
                ));
                await simulateUpload({ ...fileToRetry, status: 'waiting', progress: 0 }, setFiles, fileIndex);
            }
        };

        return (
            <div style={{ width: '280px' }}>
                <Upload
                    desc="这是一个上传单选组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行"
                    files={files}
                    onFilesSelect={handleFilesSelect}
                    onFileRemove={handleFileRemove}
                    onFileRetry={handleFileRetry}
                    multiple={false}
                    maxFileSize={10}
                />
            </div>
        );
    }
}

// 多文件上传
export const PrimaryMultiple: Story = {
    render: () => {
        const [files, setFiles] = useState<FileItem[]>([]);

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const newFileItems: FileItem[] = selectedFiles.map(file => ({
                id: Date.now() + Math.random().toString(),
                file,
                status: 'waiting' as const,
                progress: 0
            }));

            setFiles(prev => [...prev, ...newFileItems]);

            // 获取当前文件列表长度作为起始索引
            const startIndex = files.length;

            // 并发上传（最多3个）
            const uploadBatch = async (batch: FileItem[], batchStartIndex: number) => {
                await Promise.all(batch.map((item, index) =>
                    simulateUpload(item, setFiles, batchStartIndex + index)
                ));
            };

            for (let i = 0; i < newFileItems.length; i += 3) {
                const batch = newFileItems.slice(i, i + 3);
                await uploadBatch(batch, startIndex + i);
            }
        };

        return (
            <div style={{ width: '280px' }}>
                <Upload
                    desc="支持多文件上传，每次最多并发3个文件"
                    files={files}
                    onFilesSelect={handleFilesSelect}
                    onFileRemove={(id) => setFiles(prev => prev.filter(f => f.id !== id))}
                    onFileRetry={async (id) => {
                        const file = files.find(f => f.id === id);
                        const fileIndex = files.findIndex(f => f.id === id);
                        if (file && fileIndex !== -1) {
                            setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'waiting', progress: 0 } : f));
                            await simulateUpload({ ...file, status: 'waiting', progress: 0 }, setFiles, fileIndex);
                        }
                    }}
                    multiple={true}
                    maxFileSize={10}
                />
            </div>
        );
    }
}

// 拖拽上传（单文件）
export const Drag: Story = {
    render: () => {
        const [files, setFiles] = useState<FileItem[]>([]);

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const newFileItems: FileItem[] = selectedFiles.map(file => ({
                id: Date.now() + Math.random().toString(),
                file,
                status: 'waiting' as const,
                progress: 0
            }));

            setFiles(prev => [...prev, ...newFileItems]);

            // 获取当前文件列表长度作为起始索引
            const startIndex = files.length;
            for (let i = 0; i < newFileItems.length; i++) {
                await simulateUpload(newFileItems[i], setFiles, startIndex + i);
            }
        };

        return (
            <div style={{ width: '480px' }}>
                <DragUpload
                    desc="支持点击上传或拖拽文件到此区域"
                    files={files}
                    onFilesSelect={handleFilesSelect}
                    onFileRemove={(id) => setFiles(prev => prev.filter(f => f.id !== id))}
                    onFileRetry={async (id) => {
                        const file = files.find(f => f.id === id);
                        const fileIndex = files.findIndex(f => f.id === id);
                        if (file && fileIndex !== -1) {
                            setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'waiting', progress: 0 } : f));
                            await simulateUpload({ ...file, status: 'waiting', progress: 0 }, setFiles, fileIndex);
                        }
                    }}
                    multiple={false}
                    maxFileSize={10}
                    dragText={<span className="text-primary font-medium">点击上传 <span className="text-secondary-information"> /  拖拽到此区域</span></span>}
                />
            </div>
        );
    }
}



// 拖拽上传（多文件）
export const DragMultiple: Story = {
    render: () => {
        const [files, setFiles] = useState<FileItem[]>([]);

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const newFileItems: FileItem[] = selectedFiles.map(file => ({
                id: Date.now() + Math.random().toString(),
                file,
                status: 'waiting' as const,
                progress: 0
            }));

            setFiles(prev => [...prev, ...newFileItems]);

            // 获取当前文件列表长度作为起始索引
            const startIndex = files.length;
            for (let i = 0; i < newFileItems.length; i++) {
                await simulateUpload(newFileItems[i], setFiles, startIndex + i);
            }
        };

        return (
            <div style={{ width: '480px' }}>
                <DragUpload
                    desc="支持多文件拖拽上传"
                    files={files}
                    onFilesSelect={handleFilesSelect}
                    onFileRemove={(id) => setFiles(prev => prev.filter(f => f.id !== id))}
                    onFileRetry={async (id) => {
                        const file = files.find(f => f.id === id);
                        const fileIndex = files.findIndex(f => f.id === id);
                        if (file && fileIndex !== -1) {
                            setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'waiting', progress: 0 } : f));
                            await simulateUpload({ ...file, status: 'waiting', progress: 0 }, setFiles, fileIndex);
                        }
                    }}
                    multiple={true}
                    maxFileSize={10}
                    dragText={<span className="text-primary font-medium">点击上传 <span className="text-secondary-information"> /  拖拽到此区域</span></span>}
                />
            </div>
        );
    }
}


// 头像上传
export const Avatar: Story = {
    render: () => {
        const [file, setFile] = useState<FileItem | undefined>();

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const selectedFile = selectedFiles[0];

            const fileItem: FileItem = {
                id: Date.now().toString(),
                file: selectedFile,
                status: 'uploading',
                progress: 0
            };

            setFile(fileItem);

            // 模拟上传进度
            for (let i = 0; i <= 100; i += 10) {
                await new Promise(resolve => setTimeout(resolve, 100));
                setFile(prev => prev ? { ...prev, progress: i } : undefined);
            }

            // 上传成功后设置预览URL
            setFile(prev => prev ? {
                ...prev,
                status: 'success',
                progress: 100,
                url: URL.createObjectURL(selectedFile)
            } : undefined);
        };

        return (
            <div style={{ width: '200px' }}>
                <AvatarUpload
                    desc="建议尺寸：120x120像素，支持 jpg、png 格式"
                    file={file}
                    onFilesSelect={handleFilesSelect}
                    onDelete={() => setFile(undefined)}
                    onPreview={() => file?.url && window.open(file.url)}
                    maxFileSize={5}
                    acceptedTypes="image/*"
                />
            </div>
        );
    }
}



// 头像卡片上传
export const AvatarColumn: Story = {
    render: () => {
        const [file, setFile] = useState<FileItem | undefined>();

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const selectedFile = selectedFiles[0];

            const fileItem: FileItem = {
                id: Date.now().toString(),
                file: selectedFile,
                status: 'uploading',
                progress: 0
            };

            setFile(fileItem);

            // 模拟上传进度
            for (let i = 0; i <= 100; i += 5) {
                await new Promise(resolve => setTimeout(resolve, 50));
                setFile(prev => prev ? { ...prev, progress: i } : undefined);
            }

            setFile(prev => prev ? {
                ...prev,
                status: 'success',
                progress: 100,
                url: URL.createObjectURL(selectedFile)
            } : undefined);
        };

        return (
            <div style={{ width: '334px' }}>
                <AvatarFrame
                    desc="支持 jpg、png 格式，大小不超过 2MB"
                    file={file}
                    onFilesSelect={handleFilesSelect}
                    onDelete={() => setFile(undefined)}
                    imageName="重要人物"
                    information="上次更新时间：2024-01-01"
                    maxFileSize={2}
                    acceptedTypes="image/*"
                />
            </div>
        );
    }
}
// 上传失败场景
export const UploadError: Story = {
    render: () => {
        const [files, setFiles] = useState<FileItem[]>([]);

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const newFileItems: FileItem[] = selectedFiles.map(file => ({
                id: Date.now() + Math.random().toString(),
                file,
                status: 'uploading' as const,
                progress: 0
            }));

            setFiles(prev => [...prev, ...newFileItems]);

            // 模拟上传失败
            for (const fileItem of newFileItems) {
                for (let i = 0; i <= 50; i += 10) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                    setFiles(prev => prev.map(item =>
                        item.id === fileItem.id ? { ...item, progress: i } : item
                    ));
                }

                // 模拟失败
                setFiles(prev => prev.map(item =>
                    item.id === fileItem.id
                        ? { ...item, status: 'error', error: '网络错误，上传失败' }
                        : item
                ));
            }
        };

        return (
            <div style={{ width: '280px' }}>
                <Upload
                    desc="模拟上传失败场景（进度到50%后失败）"
                    files={files}
                    onFilesSelect={handleFilesSelect}
                    onFileRemove={(id) => setFiles(prev => prev.filter(f => f.id !== id))}
                    onFileRetry={async (id) => {
                        const file = files.find(f => f.id === id);
                        const fileIndex = files.findIndex(f => f.id === id);
                        if (file && fileIndex !== -1) {
                            setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'waiting', progress: 0 } : f));
                            await simulateUpload({ ...file, status: 'waiting', progress: 0 }, setFiles, fileIndex);
                        }
                    }}
                    multiple={true}
                    maxFileSize={10}
                />
            </div>
        );
    }
}
// 大文件限制测试
export const FileSizeLimit: Story = {
    render: () => {
        const [files, setFiles] = useState<FileItem[]>([]);

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const newFileItems: FileItem[] = selectedFiles.map(file => ({
                id: Date.now() + Math.random().toString(),
                file,
                status: 'waiting' as const,
                progress: 0
            }));

            setFiles(prev => [...prev, ...newFileItems]);

            // 获取当前文件列表长度作为起始索引
            const startIndex = files.length;
            for (let i = 0; i < newFileItems.length; i++) {
                await simulateUpload(newFileItems[i], setFiles, startIndex + i);
            }
        };

        return (
            <div style={{ width: '280px' }}>
                <Upload
                    desc="最大文件大小限制为 2MB"
                    files={files}
                    onFilesSelect={handleFilesSelect}
                    onFileRemove={(id) => setFiles(prev => prev.filter(f => f.id !== id))}
                    multiple={true}
                    maxFileSize={2}
                    acceptedTypes="image/*"
                />
            </div>
        );
    }
}
// 图片墙
export const ImageWallStory: Story = {
    render: () => {
        const [files, setFiles] = useState<FileItem[]>([]);

        const handleFilesSelect = async (selectedFiles: File[]) => {
            const newFileItems: FileItem[] = selectedFiles.map(file => ({
                id: Date.now() + Math.random().toString(),
                file,
                status: 'waiting' as const,
                progress: 0
            }));

            setFiles(prev => [...prev, ...newFileItems]);

            // 获取当前文件列表长度作为起始索引
            const startIndex = files.length;
            for (let i = 0; i < newFileItems.length; i++) {
                await simulateUpload(newFileItems[i], setFiles, startIndex + i);
            }
        };

        const handleFileRemove = (fileId: string) => {
            setFiles(prev => prev.filter(item => item.id !== fileId));
        };

        const handleFileRetry = async (fileId: string) => {
            const fileToRetry = files.find(f => f.id === fileId);
            if (fileToRetry) {
                const fileIndex = files.findIndex(f => f.id === fileId);
                setFiles(prev => prev.map(item =>
                    item.id === fileId ? { ...item, status: 'waiting', progress: 0 } : item
                ));
                await simulateUpload({ ...fileToRetry, status: 'waiting', progress: 0 }, setFiles, fileIndex);
            }
        };

        return (
            <div style={{ width: '528px' }}>
                <ImageWall
                    desc="支持jpg、png格式"
                    files={files}
                    onFilesSelect={handleFilesSelect}
                    onFileRemove={handleFileRemove}
                    onFileRetry={handleFileRetry}
                    maxCount={8}
                    maxFileSize={5}
                    acceptedTypes="image/*"
                    dragText="点击上传 / 拖拽到此区域"
                />
            </div>
        );
    }
}
