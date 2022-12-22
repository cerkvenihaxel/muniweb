const posts = [
    {
      title: 'Noticia 1',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'asuncion.jpeg',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Noticia 2',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'albert.jpeg',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Noticia 3',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'agenda.jpg',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function News() {
    return (
      <div className="relative bg-white mt-12 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3  bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Noticias</h2>
           
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col hover:scale-110 easy-in hover:duration-200 overflow-hidden rounded-lg shadow-lg">
                
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-secondary p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-black">{post.title}</p>
                      <p className="mt-3 text-base text-black">{post.description}</p>
                    </a>
                    
                  </div>
                  <div className="mt-6 flex items-center">
                  <button
        type="button"
        className="inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Leer más
      </button>
                
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    )
  }
  