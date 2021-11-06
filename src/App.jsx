import { useState, useEffect } from 'react'
import Card from './components/Card'
import ImageSearch from './components/ImageSearch'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSafeSearch, setIsSafeSearch] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_KEY}&q=${term}&image_type=photo&pretty=true&safesearch=${isSafeSearch}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [term, isSafeSearch])

  return (
    <div className='container mx-auto'>
      <ImageSearch safeSearch={isSafeSearch} setIsSafeSearch={setIsSafeSearch} setLoading={setIsLoading} searchText={(text) => setTerm(text)} />
      {!isLoading && !images.length ? <h1 className='text-6xl text-center mx-auto mt-32'>Not found :(</h1> : null}

      <div className='grid grid-cols-3 gap-4'>
        {isLoading ? (
          <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
        ) : (
          images.map((img) => (
            <Card key={img.id} image={img.webformatURL} likes={img.likes} views={img.views} downloads={img.downloads} user={img.user} tags={img.tags} />
          ))
        )}
      </div>
    </div>
  )
}

export default App
