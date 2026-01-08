import Card from './components/Card'

function App() {
  return (
    <>
       <div class="flex items-center justify-center">
          <h1 class="text-center ">Welcome to React course</h1>
      </div>
      <div className='flex align-bottom justify-center'>
        <Card 
         imageUrl="https://images.pexels.com/photos/259955/pexels-photo-259955.jpeg" 
         Title="Chai" 
         Desc="This is the best chai i had in my entire life" 
         buttonText="Buy now"
        />
        <Card 
         imageUrl="https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg"
         Title="Python Course" 
         Desc="Learn most wanted python course for data science and web developement in python" 
         buttonText="Grab now"
        />
        <Card 
         imageUrl="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
         Title="Hiring Java Developers" 
         Desc="Job description
            Job description:
          Hiring Java Developer with experience range 3 to 8 Years
          Skills: Java, Core Java, J2EE, Spring boot,Hibernate
          Education: Btech/BE, Mtech/ME, BCA/MCA, BSC/MSC" 
         buttonText="Grab now"
        />
       </div>
    </>
  )
}

export default App
