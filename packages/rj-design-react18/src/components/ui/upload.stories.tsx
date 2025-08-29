import type { Meta, StoryObj } from "@storybook/react-vite"
import { Upload } from "./upload"

const meta: Meta<typeof Upload> = {
    title: 'Components/Upload',
    tags: ['autodocs'],
    component: Upload,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof Upload>

export const Default: Story = {
    args: {
        desc: "这是一个上传组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行",
    },
    render: args => {
        return <div style={{ width: '180px' }}>
            <Upload desc={args.desc} />
        </div>
    }
}

export const Primary: Story = {
    args: {
        desc: "这是一个上传组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行",
    },
    render: args => {
        return <div style={{ width: '180px' }}>
            <Upload
                desc={args.desc}
                maxFileSize={10}
                acceptedTypes="image/*,application/pdf"
                onUploadComplete={(files) => console.log('上传完成:', files)}
                onUploadProgress={(fileId, progress) => console.log(`文件 ${fileId} 进度: ${progress}%`)}
            />
        </div>
    }
}