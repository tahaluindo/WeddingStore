const MapIframeGen = ({iframeValue}) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-72 h-72 rounded-lg bg-slate-100">
                    <div dangerouslySetInnerHTML={{ __html: iframeValue }}></div>
                </div>
            </div>
        </>
    )
}

export default MapIframeGen