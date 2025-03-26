'use client'

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="text-red-900 bg-red-100 m-10 p-10 mt-10 rounded-md ">
          <h1 className="font-semibold"> Algo deu errado! </h1>
          <br />
          <br />
          Tente adicionar &quot;pt&quot; no início do caminho. Por exemplo:
          localhost:3000/pt
        </div>
      </body>
    </html>
  )
}
