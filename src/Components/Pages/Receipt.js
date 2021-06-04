import { useState } from "react";
import ReactSimpleOptionsSelector from "react-simple-options-selector"; // https://github.com/ankithkonda/react-simple-options-selector

const Receipt = props => {

    
    const [search, setSearch] = useState("Search");
    
    const receiptList = [
        {
            name: "Creamy Beef & Noodles",
            img: "",
            tag: "",
            prep: "20",
            coock: "45",
            serves: "1",
            type: "glutenfree",
            ingredients: [
                "1/4 lb Ground Beef",
                "3/16 cup Onion, diced",
                "1/2 cloves Garlic, minced",
                "1/2 cups White Mushrooms, sliced",
                "1/4 tsp Thyme, dried",
                "Salt and Pepper, to taste",
                "3/8 cups Beef Broth",
                "1/8 cup Heavy Whipping Cream, Organic",
                "2 1/2 oz Rice Noodles, Tinkyada brand or similar",
                "3/8 cups Parmesan Cheese, finely grated"
            ],
            process: [
                "Start by bringing 4-5 quarts of salted water to a boil for your noodles. Once the water begins to boil, cook the rice noodles according to the instructions on the package.",
                "Place the ground beef in a wide pan or soup pot and cook over medium heat until browned. Remove and set aside, leaving the juices and fat in the pan.",
                "Keeping it at medium heat, add the diced onion and saute. Continue by adding the minced garlic. Cook until the onion is translucent and golden brown, taking care not to burn the garlic.",
                "Add the sliced mushrooms to the pan, and stir to combine. Add the dried thyme, season with salt and pepper.",
                "Add the beef broth and heavy cream, stir to combine, and increase the heat to medium-high. Allow the sauce to reduce a little (about 5 minutes of hard simmering).",
                "Add the beef back into the pot, along with the cooked noodles and grated Parmesan cheese. Stir to combine.",
                "Serve with a grind of fresh black pepper, and a sprinkle of flaky salt."
            ]    
        },
        {
            name: "Carrot Cake Bars",
            img: "",
            tag: "Carrot",
            prep: "",
            coock: "",
            serves: "8",
            type: "glutenfree",
            ingredients: [
                "1/2 cup,Cassava Flour",
                "1/2 cup,Blanched Almond Flour",
                "1/4 cup Arrowroot Flour",
                "1/2 tsp Himalayan Pink Salt",
                "1/2 tsp Baking Soda",
                "1/2 Tbsp Primal Palate Apple Pie Spice",
                "1 tsp Pure Vanilla Extract, 1 tsp for the batter, 1 tsp for the frosting",
                "1/4 cup Maple Sugar",
                "1/2 cup Palm Oil Shortening, Organic [*Spectrum Brand, sustainably sourced], 1/2 cup for the batter, 1/2 cup for the frosting",
                "2 Eggs",
                "1 cup Carrots ,shredded",
                '4 oz Kite Hill "Cream Cheese" – Original, (1 container)',
                "1 cups Powdered Sugar, 365 Organic, sifted"
            ],
            process: [
                "Preheat your oven to 350 F.",
                'Grease a 9"x9" baking dish with palm shortening or your choice of fat.',
                'In a medium sized mixing bowl, whisk together the cassava, almond flour, arrowroot, salt, baking soda, maple sugar, and apple pie spice.',
                'Add the vanilla, and eggs, and blend with a hand mixer to combine.',
                'Add in the palm shortening, and blend again until smooth.',
                'Add in the shredded carrots one cup at a time, and blend again with the hand mixer to evenly combine the carrot with the batter.',
                'Pour the batter into your prepared baking dish and smooth the top into an even layer.',
                'Bake for 23 minutes, or until a toothpick inserted comes out clean.',
                'Allow to cook completely before frosting.',
                'In a medium size mixing bowl, blend the cream cheese, palm shortening, and vanilla.',
                'Sift in the powdered sugar, and blend again until smooth.',
                'Place the frosting in the fridge until the cake is completely cooled.',
                'Spread the frosting in an even layer over the cake, cut into even squares, and serve'
            ]    
        },
        {
            name: "Suppli",
            img: "",
            tag: "Rice",
            prep: "45",
            coock: "15",
            serves: "4",
            type: "glutenfree",
            ingredients: [
                '4 Tbsp Butter, Unsalted,divided',
                '1 1/2 cups Onion, chopped',
                '2 cloves Garlic, smashed and minced',
                '3/4 cup Arborio Rice',
                '1/2 cup TÖST sparkling beverage, or dry cider, or champagne (low sweetness)',
                '2 1/2 cups Chicken Stock, free range, organic',
                '1 tsp Nom Nom Paleo Magic Mushroom Powder,(available at Whole Foods, highly recommended), Sub 3/4 tsp salt and 1/4 tsp black pepper.',
                '1/2 tsp Red Pepper Flakes',
                '1/2 cup Water',
                '1 cup Mahón-Menorca Semi-Cured Cheese, finely shredded',
                '1 1/2 tsp Lemon Juice',
                '1 pinch Himalayan Pink Salt',
                '2/3 cup Mahón-Menorca Semi-Cured Cheese (Raw), Cubed'
            ],
            process: [

            ]    
        },
        {
            name: "Roasted Broccoli",
            img: "",
            tag: "broccoli",
            prep: "",
            coock: "",
            serves: "1",
            type: "diabetes",
            ingredients: [
                '1/4 lb Broccoli, florets',
                '1/4 Tbsp Olive Oil, Extra Virgin',
                '1/4 tsp Salt, a bit'
            ],
            process: [
                'Preheat oven to roast at 400°F.',
	            'Rinse broccoli under cold water.',
	            'Chop florets from stems about 3/4 inch below crowns.',
	            'Toss with olive oil, salt, and pepper in a large mixing bowl.',
	            'Place broccoli in a baking dish, and roast for 30 minutes, stirring once halfway through cooking.'
            ]    
        },
        {
            name: "Cabbage with Onions and Apples",
            img: "",
            tag: "Onions and Apples",
            prep: "",
            coock: "",
            serves: "1",
            type: "diabetes",
            ingredients: [
                '1/4 head Green Cabbage, shredded',
                '1/2 Apple, Granny Smith, cored and thinly sliced',
                '1/4 Yellow Onion, thinly sliced',
                '1/2 Tbsp Duck Fat',
                'Salt, a bit'
            ],
            process: [
                'Preheat the oven to 400 degrees.',
                'Place the shredded cabbage in a large baking dish.',
                'Top the cabbage with the onion and onion.',
                'Season with salt and pepper, and stir to combine all ingredients.',
                'Top with duck fat, and place the dish in the oven for 5 minutes. Remove from the oven, and stir to combine the veggies with the melted fat.',
                'Place the veggies back in the oven, and bake for an additional 45-60 minutes, stirring every 20 minutes to prevent burning on the surface.'
            ]    
        },
        {
            name: "Pan Roasted Pork Chops",
            img: "",
            tag: "Pork",
            prep: "",
            coock: "",
            serves: "1",
            type: "diabetes",
            ingredients: [
                '3/4 lb Pork Chop, two chops, about 3/4 lb each, bone in.',
                '1/2 Tbsp Primal Palate Super Gyro Seasoning',
                '1 Tbsp Lard, or your choice of cooking fat. We also relly like Primal Kitchen Avocado Oil.',
                '1 Tbsp Tin Star Cultured Ghee',
                '1 cloves Garlic, crushed',
                'Thyme, fresh, a few sprigs',
                '1/8 tsp Sea Salt, to garnish'
            ],
            process: [
                'Bring the pork chops out 15-20 minutes prior to cooking to allow to come up to room temperature.',
                'Sprinkle Super Gyro seasoning on all sides, and allow the chops to rest.',
                'Preheat your oven to 425 F.',
                'In a medium cast iron skillet, heat 2 tablespoons of cooking fat over medium heat. (The new Primal Kitchen Avocado Oil is awesome for this, but you can also use Lard or Coconut Oil.) When the oil starts to shimmer, tilt the pan to evenly coat it with the oil, and add the pork chops.',
                'Sear on the first side for 3:30, then flip and sear the second side for 3 minutes. Flip again for 2 minutes, and then a final time for 2 minutes. This helps to ensure an even sear.',
                'Transfer the skillet to the hot oven. Flip the pork chops every 2 minutes, for a total of 10 minutes of roasting.',
                'Remove the skillet from the oven. Move the pork chops to a plate, and drain off the fat from the skillet. Add 2 tablespoons of cultured ghee to the pan over medium heat. Add the crushed garlic and thyme to the pan, and saute for a minute.',
                'Move the pork chops back to the hot pan, and spoon the ghee, thyme, and garlic over the chops. Cook for a final minute, continuing to spoon the ghee over the chops, and then remove to serve.',
                'Allow the pork chops to rest a few minutes, then sprinkle with a moderately coarse sea salt (Like our French Grey Sea Salt). Serve hot with your choice of side dishes!'
            ]    
        },
        {
            name: "Asian Salmon Bowls",
            img: "",
            tag: "Salmon",
            prep: "20",
            coock: "25",
            serves: "1",
            type: "sclerosis",
            ingredients: [
                '1/2 cup Celery, chopped',
                'Salt and Pepper, to taste',
                '1/2 Tbsp Ghee',
                '1 cups White Mushrooms, sliced',
                '1/4 Tbsp Olive Oil, Extra Virgin, a drizzle to coat',
                '3/8 lb Salmon Filet, Wild Caught',
                'pinch Himalayan Pink Salt',
                'pinch Granulated Garlic',
                'pinch Ginger, ground',
                'pinch Red Pepper Flakes',            
                '1 1/2 cups Cauliflower,1 head, riced',
                'Fish Sauce, a few drops',
                '1 Tbsp Coconut Aminos',
                '1/2 tsp Toasted Sesame Oil',
                '1 Tbsp Green Onion, sliced'
            ],
            process: [
                'Preheat your oven to 350 F.',
                'Heat your wok on high heat. Chop the celery and slice the mushrooms. Add the ghee (or your choice of fat) to the wok. Swirl it around to evenly coat the wok, then add the celery. Season with salt and pepper, then add the mushrooms and stir fry.',
                'While the celery and mushrooms are stir frying, prepare the salmon. Place it in a shallow baking dish. Drizzle with olive oil, and season with a dash of pink Himalayan salt, garlic, ginger, and red pepper flakes. Bake for 25 minutes, or until cooked through.',
                'Rice one head of cauliflower using a cheese grater or food processor. Add to the stir fry.',
                'Add to the stir fry a few drops of fish sauce, 2 tablespoons of coconut aminos, and a splash of toasted sesame oil. Stir everything together until soft and the sauce has reduced. Add a dash of garlic powder and ginger to the stir fry, for extra flavor.',
                'Slice some green onion to add into the stir fry, and reserve some additional slice to garnish the bowl.',
                'When the salmon has cooked through, flake it apart using two forks. Add to the stir fry. Toss everything together, and serve with a garnish of sliced green onion.'
            ]    
        },
        {
            name: "Super Gyro Lamb Chops",
            img: "",
            tag: "Lamb",
            prep: "2",
            coock: "12",
            serves: "2",
            type: "Super Gyro Lamb Chops",
            ingredients: [
                '1 lb Lamb Chops, rib chops or loin chops, 1 - 1.5" thick',
                '1/2 Tbsp Olive Oil, Extra Virgin',
                '1/2 Tbsp Primal Palate Super Gyro Seasoning',
                '1/4 tsp Himalayan Pink Salt'
            ],
            process: [
                'Preheat your grill to medium high heat.',
                'Toss the lamb chops with the olive oil to cover, then season on all sides with our Super Gyro seasoning, and a little extra Himalayan Pink Salt.',
                'When the grill has reached 500F, sear the lamb chops on both sides for 2-3 minutes per side over direct heat. Shut off a burner or transfer to a cooler part of the grill, and cook with indirect heat for an additional 4-6 minutes, flipping one more time. Cook more or less depending on your preference, these directions will approximately yield "Medium" lamb chops that are 1" thick.',
                'Serve immediately. We suggest pairing it with a Greek Salad.'
            ]    
        },
        {
            name: "Oven Roasted Cauliflower",
            img: "",
            tag: "Cauliflower",
            prep: "5",
            coock: "25",
            serves: "1",
            type: "sclerosis",
            ingredients: [ 
                '1 1/2 cups Cauliflower, 1 head, cut into florets',
                'Tbsp Olive Oil, Extra Virgin',
                'tsp Primal Palate Garlic & Herb Seasoning'
            ],
            process: [
                'Preheat your oven to 400 degrees F.',
                'Rinse the head of cauliflower and cut off any extra stem or leaves, if needed.',
                'Cut the cauliflower into approximately 1-2" florets, and toss with olive oil.',
                'Sprinkle the cauliflower with our organic Garlic & Herb blend. Arrange on a baking sheet and bake for 20-30 minutes. The cauliflower should get golden edges, but not burn. Toss and rearrange about halfway through cooking.',
                'Serve immediately.'
            ]    
        },

    ];

    const CustomOptions = [ //dinamic add of principar ingredients 
        "Some",
        "Other",
        "Options",
        "To",
        "Select"
    ];

    const searchHandler = event =>{
        setSearch(event.target.value);
    };

    const foodHandler = (name, selected) => {
        console.log(selected);
        // add selected on receipt filter
    };

    let receipts = props.receipt.map( (meal, id) =>{
        // some logic for => primo - secondo - contorno
        return(
            <div className="receipt" key={id} >
                <div className="receipt__button">
                    <p className="receipt__date">{meal.date.toLocaleDateString()}</p>
                    <h4 className="receipt__name">{meal.name}</h4>
                </div>
                <p className="receipt__info">{meal.information}</p>
            </div>
        )
    } );     

    return(
        <div>
            <h1>Receipt for {props.user.name}</h1>
            <input className="searchBar" type="text" placeholder={search} onChange={searchHandler}/>
            <ReactSimpleOptionsSelector 
            	name="ingredients filter"
                type="checkbox"
                onSelectionChange={foodHandler}
	            options={
	            	CustomOptions.map((value, index)=>{
	            		return {
	            			id:value,
	            			label:value,
	            			selected:(index === 2) ? true:false        
	            		}
	            	})
	            }

            />

                {/* <ul className="receipt__header">
                <li className="receipt__header__element calendar__switch__element--active">
                    <p>Primo</p>
                </li>
                <li className="receipt__header__element">
                    <p>Secondo</p>
                </li>
                <li className="receipt__header__element">
                    <p>Contorno</p>
                </li>
                </ul> */}
            
            {receipts}     
        </div>
        
    );
}

export default Receipt;