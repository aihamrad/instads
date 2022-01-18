export const promotions = (user, selectedItems) => {
  let itemsAfterPromotions = selectedItems
  switch (user.id) {

    case "igb-berhad":
      if(itemsAfterPromotions.filter((item) => item.id === 'Premium')[0].quantity >= 4) {
        itemsAfterPromotions = AddNewPrice(itemsAfterPromotions,'Premium', 379.99)
      } else {
        itemsAfterPromotions = AddNewPrice(itemsAfterPromotions, 'Premium', 394.99)
      }
      return calculatePrice(itemsAfterPromotions)
    
    case "uem-sunrise":
      itemsAfterPromotions = getpromoQuantity(itemsAfterPromotions, 'Standard', 3)
      return calculatePrice(itemsAfterPromotions)

    case "sime-darby-property-bhd":
       itemsAfterPromotions = AddNewPrice(itemsAfterPromotions, 'Featured', 299.99)
      return calculatePrice(itemsAfterPromotions)

    case "mah-sing Group":
      itemsAfterPromotions = AddNewPrice(itemsAfterPromotions, 'Featured', 309.99)
      if(itemsAfterPromotions.filter((item) => item.id === 'Premium')[0].quantity >= 3) {
        itemsAfterPromotions = AddNewPrice(itemsAfterPromotions,'Premium', 389.99)
      } else {
        itemsAfterPromotions = AddNewPrice(itemsAfterPromotions, 'Premium', 394.99)
      }
      itemsAfterPromotions = getpromoQuantity(itemsAfterPromotions, 'Standard', 5)
      return calculatePrice(itemsAfterPromotions)
    default:
      return calculatePrice(itemsAfterPromotions)
  }
};

export const promotionsText = (user) => {
  switch (user.id) {
    case "igb-berhad":
      return "- Gets a discount on Premium Ads where 4 or more are purchased. The price drops to 379.99 RM per ad";
    case "uem-sunrise":
      return "- Gets a “3 for 2” deal on Standard Ads";
    case "sime-darby-property-bhd":
      return "- Gets a discount on Featured Ads where the price drops to 299.99 RM per ad";
    case "mah-sing Group":
      return "- Gets a “5 for 4” deal on Standard Ads \n- Gets a discount on Featured Ads where the price drops to 309.99 RM per ad \n- Gets a discount on Premium Ads when 3 or more are purchased. The price drops to 389.99 RM per ad";
    default:
      return "";
  }
};


const getpromoQuantity = (items, type, value) => {
  let selectedItem = items.find((item) => item.id === type)
    const countOfFreeItems = parseInt(selectedItem.quantity / value)
    const priceWithPromo = (selectedItem.quantity - countOfFreeItems) * selectedItem.price_per_unit
    selectedItem.totalPrice = priceWithPromo
  return items
}

const AddNewPrice = (array ,type, price) => {
 array.find((item) => item.id === type).price = price
 return array
}

const calculatePrice = (items) => {
  return items.reduce((prev, current) => prev + (current.totalPrice || current.price * (current.quantity || 0)), 0)
}
