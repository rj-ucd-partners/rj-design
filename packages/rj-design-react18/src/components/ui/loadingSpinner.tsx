
const LoadingSpinner = ({
    isLoading = true,
    text = "加载中...",
    backgroundColor = "bg-black/50",
    spinnerColor = "text-blue-500",
    textColor = "text-white"
}) => {
    if (!isLoading) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${backgroundColor}`}>
            <div className="flex flex-col items-center">
                {/* 旋转动画部分 */}
                <div className={`w-12 h-12 rounded-full border-4 ${spinnerColor} border-t-transparent animate-spin`}></div>

                {/* 文本提示 */}
                {text && (
                    <p className={`mt-4 text-lg font-medium ${textColor}`}>{text}</p>
                )}
            </div>
        </div>
    );
};

export default LoadingSpinner;