import { Button, Heading, Text } from "@/components/UI";

export function ModalLogin() {
    return (
        <div>
            <Heading>
                Sign In
            </Heading>
            <form>
                <div className='flex flex-col my-4 w-full'>
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' id='email' placeholder='email@gmail.com' className='p-2 bg-secondary rounded-lg outline-red border border-slate-300' />
                </div>
                <div className='flex flex-col my-4 w-full'>
                    <label htmlFor="password">Passoword</label>
                    <input type='password' name='password' id='password' className='p-2 bg-secondary rounded-lg outline-red border border-slate-300' />
                </div>

                <Button color='red' className='w-full mt-8'>
                    <Text color='white' fw='bold'>Sign In</Text>
                </Button>
            </form>
        </div>
    )
}
