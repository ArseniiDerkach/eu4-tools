enum IdeaCategory {
    Adm = 'adm',
    Dip = 'dip',
    Mil = 'mil',
  }
  
  type IdeaType = {
    name?: string;
    type?: IdeaCategory;
  }

export default function Idea(props: IdeaType) {
    const {name, type} = props;
    return (
        <div>
            {name ? <span>{name}</span> : <span>Choose idea group</span>}
        </div>
    )
}