export default function About() {
  return (
    <section
      id="about"
      className="md:w-screen md:h-screen bg-neutral-900 text-neutral-100 flex flex-col py-20 px-6 text-center border-t border-neutral-800"
    >
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <div className="flex flex-col md:flex-row items-center gap-20 md:gap-25 max-w-6xl mx-auto justify-between pb-4">
        <p className="text-lg text-neutral-400 text-left md:w-1/2 whitespace-pre-line">
          {`I'm a passionate software developer who thrives on turning ideas into robust, user-friendly digital products. I specialize in modern web technologies, both frontend and backend, and enjoy building applications that combine clean code, thoughtful design, and seamless user experience.
          
          My development philosophy is simple: keep things clear, efficient, and maintainable. I value transparent communication, agile teamwork, and continuous improvement. For me, every project is a chance to create something meaningful—whether it’s a beautiful interface, a scalable API, or a complete end-to-end system.

          If you’re looking for someone who’s detail-oriented, resourceful, and genuinely invested in building quality digital experiences, I’d love to connect and help bring your next project to life.`}
        </p>
        <img
          src="/perfil.jpeg"
          alt="Kevin García"
          className="border-4 border-neutral-800 w-40 md:w-100 rounded-lg object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-row mt-auto md:min-w-6xl text-neutral-400 justify-between md:mx-auto">
            <p>Linkedln</p>
            <p>GitHub</p>
            <p>Instagram</p>
      </div>
    </section>
  );
}
