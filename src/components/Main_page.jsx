import "./Main_page.module.css";

export function Main_page(props) {
  return (
    <>
      <h1>QUUUUIZZZ</h1>
      <h2>Your IQ under attack</h2>
      <div class="main_page_block">
        <form id="user_data">
          <div>
            <label for="avatar">
              <div class="avatar_select">
                <div class="show_block">
                  <input type="hidden" value="" name="avatar" id="avatar" />
                </div>
                <ul class="avatar_select" id="avatar_select">
                  <li>😛</li>
                  <li>🙁</li>
                  <li>🥶</li>
                  <li>🥵</li>
                </ul>
              </div>
            </label>
          </div>
          <div>
            <label for="user_name">
              <input
                type="text"
                value=""
                onChange={() => {
                  console.log("Deleted movie");
                }}
                name="user"
                id="user"
              />
            </label>
          </div>
          <button type="submit" value="start">
            START
          </button>
        </form>
        <button
          class=""
          onClick={() => {
            console.log("Deleted movie");
            setSelected_Page(4);
          }}
        >
          Learn more
        </button>
      </div>
    </>
  );
}
