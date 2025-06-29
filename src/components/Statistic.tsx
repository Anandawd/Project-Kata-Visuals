export default function Statistic() {
  const currentYear = new Date().getFullYear();
  return (
    <section>
      {/* Stats Section */}
      <div className="p-8 lg:p-12 backdrop-blur-lg bg-gray-950 border border-white/20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2 ">
              150+
            </div>
            <div className="text-gray-400 font-medium">Trusted Clients</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
              1500+
            </div>
            <div className="text-gray-400 font-medium">Photos Taken</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
              500+
            </div>
            <div className="text-gray-400 font-medium">Awesome Videos</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
              98%
            </div>
            <div className="text-gray-400 font-medium">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
