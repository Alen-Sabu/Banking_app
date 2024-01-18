import { clients } from "../constants"

const Clients = () => {
  return (
    <section className="flex justify-center items-center my-4">
        <div className="flex flex-wrap w-full">
            {clients.map((client) => (
                <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[192px]">
                    <img src={client.logo} alt="logo" className="sm:w-[192px] w-[100px] object-contain " />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Clients
