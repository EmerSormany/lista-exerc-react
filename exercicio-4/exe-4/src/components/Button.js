
function Button(props) {
    console.log(props.color.rgb);
    return (
        <>
            <div style={{
                margin: '5px', 
                padding:'5px', 
                height: '20px', 
                backgroundColor: props.color.rgb
                }}></div>
        </>
    )
}


export default Button;