
export const Tab = (props : any) => {

    return (
        <div className={props.value === props.selected ? 'tablink-selected' : 'tablink'} onClick={props.onClick}>
            <h1>{props.value}</h1>
        </div>
    )
}
