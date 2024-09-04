import { createSignal } from 'solid-js';
import data from './_data/data';

function App() {
  const [notifications, setNotifications] = createSignal(data);
  const unreadTotal = () => notifications().filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications((p) =>
      p.map((i) => {
        i.unread = false;
        return i;
      })
    );
  };

  const markAsRead = (id: number) => {
    setNotifications((p) =>
      p.map((i) => {
        if (i.id === id) {
          i.unread = false;
        }
        return i;
      })
    );
  };

  return (
    <main class="grid min-h-dvh md:place-items-center md:p-8">
      <section class="w-full overflow-clip bg-white shadow-none md:w-[min(45rem,100%)] md:rounded-2xl md:shadow-sm">
        <header class="sticky top-0 z-10 flex items-center justify-between gap-4 bg-gradient-to-b from-white from-60% to-white/0 to-100% px-4 py-5 md:px-8 md:pb-6 md:pt-8">
          <h1 class="flex items-center gap-2 text-[1.5rem] font-extrabold">
            Notifications{' '}
            {unreadTotal() ? (
              <span class="inline-block rounded bg-blue px-3 py-px text-base text-white">
                {unreadTotal()}
              </span>
            ) : null}
          </h1>
          <button
            class="text-neutral-400 transition-colors hocus:text-blue"
            type="button"
            onClick={markAllAsRead}
          >
            Mark all as read
          </button>
        </header>
        <ul class="space-y-2 px-4 pb-4 md:px-8 md:pb-8">
          {notifications().map((n) => {
            return (
              <li>
                <article
                  onClick={() => markAsRead(n.id)}
                  class="grid cursor-pointer grid-cols-[3rem_auto] gap-x-4 gap-y-0 rounded-lg p-4 text-sm transition-all"
                  classList={{
                    'bg-neutral-100 hocus:bg-neutral-200': n.unread,
                    'grid-cols-[3rem_auto_3rem]': n.type === 'PICTURE_COMMENT'
                  }}
                >
                  <figure class="row-span-2 aspect-square">
                    <img
                      src={n.user.avatar}
                      alt=""
                      role="presentation"
                      class="size-full rounded-full object-cover object-center"
                    />
                  </figure>
                  <div class="text-neutral-500">
                    <span class="mr-1 font-extrabold text-neutral-600 transition-colors hocus:text-blue">
                      {n.user.name}
                    </span>
                    {n.message}
                    {n.type === 'POST_REACT' && (
                      <span class="mx-1 font-extrabold text-neutral-500 transition-colors hocus:text-blue">
                        {n.post.title}
                      </span>
                    )}
                    {n.type === 'GROUP' && (
                      <span class="mx-1 font-extrabold text-neutral-500 transition-colors hocus:text-blue">
                        {n.group.title}
                      </span>
                    )}
                    {n.unread ? (
                      <span
                        class="inline-block aspect-square size-2 -translate-y-[15%] rounded-full bg-red"
                        classList={{
                          'ml-1': n.type === 'FOLLOW'
                        }}
                      />
                    ) : null}
                  </div>
                  {n.type === 'PICTURE_COMMENT' && (
                    <figure class="row-span-2 aspect-square">
                      <img
                        src={n.picture}
                        alt=""
                        role="presentation"
                        class="size-full rounded-md object-cover object-center"
                      />
                    </figure>
                  )}
                  <time class="text-neutral-400">{n.relative_timestamp}</time>
                  {n.type === 'PRIVATE_MESSAGE' && (
                    <div class="col-start-2 mt-2 cursor-pointer rounded border border-neutral-200 p-4 text-neutral-400 transition-all hocus:bg-neutral-200">
                      {n.message_preview}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
