#### React Multi Page 
![Animation](https://user-images.githubusercontent.com/99739515/188268371-24b566f6-e70d-4bb4-ae3d-d7dce37dd472.gif)

#### This project aims to create Drinks Page with React and pure Css
[🍹click here to see page](https://react-smilga-drinks.vercel.app)

### In this project i have used;

✅ Props and State Logic

✅ Resuable Components

✅ React Router Dom

✅ State Management with Context Api

✅ Conditional Rendering

✅ Async Await Function

✅ React Hooks (useState, useEffect, useRef, useNavigate, useParams ReactMemo)

✅ Custom Hook

✅ React AutoAnimate

✅ Hide apiKeys in .evn file

✅ Deployment with Vercel and Netlify

### apiAdress
`
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
`


## useRef Hook

- First Usage : To Access DOM ELEMENTS

```
    const myRef = useRef(initialValue)
    useEffect(() => {
        myRef.current.focus()
    }, [])

    <input ref={myRef} type="text" />

useRef ile olusturulan objeler referansı değişmez. Component render olsa bile hafızadaki yeri hiç bir zaman değişmez.
Objeler her render da yeniden olusturulur. Ve referansı değişir. Fakat bu durum performans kaybına neden olabilir.
useRef ile tanımlanan obje render olmaz. UI da anlık yanstımaya gerek yoksa useRef kullanılabilir

```
Anlık bir validationa gerek yoksa useRef in current ın value su ile alınabilir. Gereksiz renderları önler.

- Second Usage : 

```
    const inputRef = useRef()

    const handleClick = () => {

        setSearch(inputRef.current.value)
    }


    <input ref={inputRef} type="search" >
    <button onClikc={handleClick}>  Search User </button>
```

## ReactMemo Build In Structure:

```
Bir componentin içinde başka bir child component çağırdığımızı varsayalım. Parent component render olduğunda child componentte herhangi bir değişiklik olmamasına rağmen yinede render olacaktır.  Bu performans kaybına sebep olacaktır.
Bunu engellemek için render olmasını engellemek istediğimiz componenti ReactMemo ile wraplamamız gerekmektedir. Çalışma mantığı ise componenti hafızaya alıyor. Render da location ı değişmiyor.
Fakat ilgili child componente props ile bir değer gönderildiğnde React.memo ile sarılsa bile render olur.

1. Kullanım : 

const Header = React.memo( () => {
    return (
        <img src ={x} alt = "abc" >
    )
}
)
export default Header

2. Kullanım (Best Practice): 

import {memo} from "react";

export default memo(Header)

```
