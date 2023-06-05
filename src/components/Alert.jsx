
export default function Alert({ children }) {
  return (
    <div className="bg-red-500 text-white text-center p-2 uppercase font-bold rounded-lg mb-1">
      <p>{children}</p>
    </div>
  )
}
