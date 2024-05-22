import data from '../../mocks/characters.json'
import { HeartIcon } from '../../componentss/Icons'
import './Home.css'

const Home = () => {
  return (
    <>
      <ul className='character-list'>
        {data.results.slice(0, 10).map((character) => {
          const {
            id,
            name,
            status,
            species,
            image,
            gender,
            origin: { name: originName }
          } = character
          return (
            <li key={id} className='character-item'>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <div>
                <p>
                  <strong>Status:</strong> {status}
                </p>
                <p>
                  <strong>Species:</strong> {species}
                </p>
                <p>
                  <strong>Gender:</strong> {gender}
                </p>
                <p>
                  <strong>Location:</strong> {originName}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home
