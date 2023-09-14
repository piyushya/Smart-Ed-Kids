import modules_data from '../module_data.json'

export default function Module({id}) {
    const module = modules_data['modules'][id-1];
    return (
        <div>
            {module.title}
            <img src={'../' + module.image} alt="module image"></img>
        </div>
    )
}