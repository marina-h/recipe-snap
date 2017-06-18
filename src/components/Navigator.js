import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import PhotoPickerScreen from './PhotoPicker'
import OptionsScreen from './Options'
import RecipesScreen from './Recipes'
import SavedRecipesScreen from './SavedRecipes'

const PhotoPickerStack = StackNavigator({
  PhotoPicker: { screen: PhotoPickerScreen },
  Options: { screen: OptionsScreen },
  Recipes: { screen: RecipesScreen },
})

const recipeTabBarIcon = (
  <Icon name="photo-camera" />
)

PhotoPickerStack.navigationOptions = {
  tabBarLabel: 'Find New Recipes',
  tabBarIcon: recipeTabBarIcon
}

const App = TabNavigator({
  FindRecipes: { screen: PhotoPickerStack },
  Saved: { screen: SavedRecipesScreen }
}, {
  animationEnabled: true
})

export default App
