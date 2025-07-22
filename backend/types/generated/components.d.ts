import type { Schema, Struct } from '@strapi/strapi';

export interface BuildingblocksAnswer extends Struct.ComponentSchema {
  collectionName: 'components_buildingblocks_answers';
  info: {
    displayName: 'Answer';
    icon: 'file';
  };
  attributes: {
    IsCorrect: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BuildingblocksImageDropfield extends Struct.ComponentSchema {
  collectionName: 'components_buildingblocks_image_dropfields';
  info: {
    displayName: 'Image Dropfield';
    icon: 'expand';
  };
  attributes: {
    Term: Schema.Attribute.String & Schema.Attribute.Required;
    XCoord: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    YCoord: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface BuildingblocksPair extends Struct.ComponentSchema {
  collectionName: 'components_buildingblocks_pairs';
  info: {
    displayName: 'Text Pair';
    icon: 'server';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.Text;
  };
}

export interface ExercisesDragAndDrop extends Struct.ComponentSchema {
  collectionName: 'components_exercises_drag_and_drops';
  info: {
    displayName: 'Image Drag and Drop';
    icon: 'cursor';
  };
  attributes: {
    Dropfields: Schema.Attribute.Component<
      'buildingblocks.image-dropfield',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface ExercisesFillInTheBlank extends Struct.ComponentSchema {
  collectionName: 'components_exercises_fill_in_the_blanks';
  info: {
    displayName: 'Fill-in-the-Blank';
    icon: 'underline';
  };
  attributes: {
    ClozeText: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ExercisesMatchPairs extends Struct.ComponentSchema {
  collectionName: 'components_exercises_match_pairs';
  info: {
    displayName: 'Match Pairs';
    icon: 'dashboard';
  };
  attributes: {
    Pairs: Schema.Attribute.Component<'buildingblocks.pair', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface ExercisesMultipleChoice extends Struct.ComponentSchema {
  collectionName: 'components_exercises_multiple_choices';
  info: {
    displayName: 'Multiple Choice';
    icon: 'check';
  };
  attributes: {
    Answers: Schema.Attribute.Component<'buildingblocks.answer', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExercisesShortAnswer extends Struct.ComponentSchema {
  collectionName: 'components_exercises_short_answers';
  info: {
    displayName: 'Short Answer';
    icon: 'italic';
  };
  attributes: {
    Answer: Schema.Attribute.String & Schema.Attribute.Required;
    Question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ExercisesTextDragAndDrop extends Struct.ComponentSchema {
  collectionName: 'components_exercises_text_drag_and_drops';
  info: {
    displayName: 'Text Drag and Drop';
    icon: 'bold';
  };
  attributes: {
    ClozeText: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface UserProgress extends Struct.ComponentSchema {
  collectionName: 'components_user_progresses';
  info: {
    displayName: 'progress';
    icon: 'book';
  };
  attributes: {
    chapter: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    lesson: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buildingblocks.answer': BuildingblocksAnswer;
      'buildingblocks.image-dropfield': BuildingblocksImageDropfield;
      'buildingblocks.pair': BuildingblocksPair;
      'exercises.drag-and-drop': ExercisesDragAndDrop;
      'exercises.fill-in-the-blank': ExercisesFillInTheBlank;
      'exercises.match-pairs': ExercisesMatchPairs;
      'exercises.multiple-choice': ExercisesMultipleChoice;
      'exercises.short-answer': ExercisesShortAnswer;
      'exercises.text-drag-and-drop': ExercisesTextDragAndDrop;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'user.progress': UserProgress;
    }
  }
}
