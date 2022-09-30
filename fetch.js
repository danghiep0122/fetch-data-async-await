const [data, setData] = useState(null)

useEffect(() => {
    const url = 'https://api.mockaroo.com/api/26f073c0?count=20&key=0f870f80'

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setData(json)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])
