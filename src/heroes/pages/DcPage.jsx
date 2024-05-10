import { HeroList } from '../components';


export const DcPage = () => {
  return (
    <div>
      <h1 style={{color:'white'}}>DC Comics</h1>
      <hr />

      <HeroList publisher='DC Comics' />
    </div>
  )
}
