function Name({name}: {name: string}) {

    const handleBtnClick = () => {
        console.log("Project running!")
    }

    return (
        <>
            <h1>
                {name}
            </h1>

            <button onClick={handleBtnClick}>Button</button>
        </>
    )
}

export default Name;