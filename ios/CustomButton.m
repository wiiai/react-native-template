//
//  CustomButton.m
//  WowImRN
//
//  Created by Xiong Gao on 2023/8/7.
//


#import <React/RCTViewManager.h>


// CustomButton
@interface CustomButton : UIButton
@property (nonatomic, copy) NSString *title;

@end


// CustomButton
@implementation CustomButton

- (instancetype) init
{
  NSLog(@"button init");
  self = [super initWithFrame:CGRectZero];
  if (self) {
    [self addTarget:self action:@selector(buttonTapped) forControlEvents:UIControlEventTouchUpInside];
  }
  return self;
}

- (void)buttonTapped
{
  NSLog(@"button tapped");
}

- (void) setText:(NSString *)text {
  NSLog(@"set text %@", text);
  [self setTitle:text forState:UIControlStateNormal];
}

@end


// CustomButtonManager
@interface CustomButtonManager : RCTViewManager
@end

// CustomButtonManager
@implementation CustomButtonManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  CustomButton * btn = [[CustomButton alloc] init];
  return btn;
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end
