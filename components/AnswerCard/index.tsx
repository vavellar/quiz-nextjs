function AnswerCard({text, index}) {

  const letters = ['a', 'b', 'c', 'd']
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '10px',
      flexDirection: 'row'
    }}>
      <div style={{ flexDirection: 'row'}}>
        <p>{letters[index]}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default AnswerCard