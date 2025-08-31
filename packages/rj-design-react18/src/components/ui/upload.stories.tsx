import type { Meta, StoryObj } from "@storybook/react-vite"
import { AvatarFrame, AvatarUpload, DragUpload, Upload } from "./upload"

const meta: Meta<typeof Upload> = {
    title: 'Components/Upload',
    tags: ['autodocs'],
    component: Upload,
    argTypes: {

    },
}

export default meta

type Story = StoryObj<typeof Upload>

export const Primary: Story = {
    args: {
        desc: "这是一个上传单选组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行",
    },
    render: args => {
        return <div style={{ width: '280px' }}>
            <Upload
                desc={args.desc}
                maxFileSize={10000}
                onUploadComplete={(files) => console.log('上传完成:', files)}
                onUploadProgress={(fileId, progress) => console.log(`文件 ${fileId} 进度: ${progress}%`)} multiple={false} />
        </div>
    }
}

export const PrimaryMultiple: Story = {
    args: {
        desc: "这是一个上传单选组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行",
        multiple: true,
        maxUploadSize: 3
    },
    render: args => {
        return <div style={{ width: '280px' }}>
            <Upload
                desc={args.desc}
                maxFileSize={10000}
                onUploadComplete={(files) => console.log('上传完成:', files)}
                onUploadProgress={(fileId, progress) => console.log(`文件 ${fileId} 进度: ${progress}%`)}
                multiple={args.multiple}
                maxUploadSize={args.maxUploadSize}
            />
        </div>
    }
}
export const Drag: Story = {
    args: {
        desc: "这是一个上传组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行",
        multiple: false,
        maxUploadSize: 3,
        maxFileSize: 10000
    },
    render: args => {
        return <div style={{ width: '480px', height: '300px' }}>
            <DragUpload
                desc={args.desc}
                maxFileSize={args.maxFileSize}
                onUploadComplete={(files) => console.log('上传完成:', files)}
                onUploadProgress={(fileId, progress) => console.log(`文件 ${fileId} 进度: ${progress}%`)}
                multiple={args.multiple}
                maxUploadSize={args.maxUploadSize}
            />
        </div>
    }
}
export const DragMultiple: Story = {
    args: {
        desc: "这是一个上传组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行",
        multiple: true,
        maxUploadSize: 3
    },
    render: args => {
        return <div style={{ width: '480px', height: '300px' }}>
            <DragUpload
                desc={args.desc}
                maxFileSize={10000}
                onUploadComplete={(files) => console.log('上传完成:', files)}
                onUploadProgress={(fileId, progress) => console.log(`文件 ${fileId} 进度: ${progress}%`)}
                multiple={args.multiple}
                maxUploadSize={args.maxUploadSize}
            />
        </div>
    }
}

export const Avatar: Story = {
    args: {
        desc: "这是一个上传组件，你可以把你的见不得人的小文件上传到这里，之所以叫上传组件，是因为它可以上传文件。说这么多就是为了测试换行",
        acceptedTypes: 'image/png'
    },
    render: args => {
        return <div style={{ width: '480px', height: '400px' }}>
            <AvatarUpload
                desc={args.desc}
                maxFileSize={100}
                acceptedTypes={args.acceptedTypes}
                onUploadComplete={(files) => console.log('上传完成:', files)}
                onUploadProgress={(fileId, progress) => console.log(`文件 ${fileId} 进度: ${progress}%`)}
                multiple={false}
            />
        </div>
    }
}

export const AvatarCloum: Story = {
    args: {
        desc: "这些是描述信息",
        acceptedTypes: 'image/png'
    },
    render: args => {
        return <div style={{ width: '334px', height: '400px' }}>
            <AvatarFrame
                desc={args.desc}
                maxFileSize={100}
                acceptedTypes={args.acceptedTypes}
                onUploadComplete={(files) => console.log('上传完成:', files)}
                onUploadProgress={(fileId, progress) => console.log(`文件 ${fileId} 进度: ${progress}%`)}
                multiple={false} imageName={"重要人物"}
                information={"XXXX"} />
        </div>
    }
}
