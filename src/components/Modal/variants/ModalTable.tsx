import { Button, Flex, Heading, Text } from "@/components/UI";

export function ModalTable() {
  return (
    <form className='flex flex-col items-center p-4'>
      <Heading>
        Reserver Table
      </Heading>

      <div className='flex flex-col my-4 w-full'>
        <label htmlFor="name">Name</label>
        <input type='text' name='name' id='name' placeholder='Your Name...' className='p-2 bg-secondary rounded-lg outline-red border border-slate-300' />
      </div>

      <Flex className="w-full">
        <div className='flex flex-col my-4 w-full'>
          <label htmlFor="date">Date</label>
          <input type='date' name='date' id='date' className='p-2 bg-secondary rounded-lg outline-red border border-slate-300' />
        </div>

        <div className='flex flex-col my-4 w-full'>
          <label htmlFor="hora">Hora</label>
          <input type='time' name='hora' id='hora' className='p-2 bg-secondary rounded-lg outline-red border border-slate-300' />
        </div>
      </Flex>

      <Flex className="w-full">
        <div className='flex flex-col my-4 w-1/2'>
          <label htmlFor="phone">Phone</label>
          <input type='number' name='phone' id='phone' className='w-full p-2 bg-secondary rounded-lg outline-red border border-slate-300' placeholder="322 4857 584" />
        </div>

        <div className='flex flex-col my-4 w-1/2'>
          <label htmlFor="peoples">Peoples</label>
          <input type='number' name='peoples' id='peoples' className='w-full p-2 bg-secondary rounded-lg outline-red border border-slate-300' placeholder="6" />
        </div>
      </Flex>


      <Button color='red' className='w-full mt-8'>
        <Text color='white' fw='bold'>Reserve</Text>
      </Button>
    </form>
  )
}
