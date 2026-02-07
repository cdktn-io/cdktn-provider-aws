# `savingsplansSavingsPlan` Submodule <a name="`savingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.savingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SavingsplansSavingsPlan <a name="SavingsplansSavingsPlan" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

savingsplanssavingsplan.NewSavingsplansSavingsPlan(scope Construct, id *string, config SavingsplansSavingsPlanConfig) SavingsplansSavingsPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig">SavingsplansSavingsPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig">SavingsplansSavingsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime">ResetPurchaseTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount">ResetUpfrontPaymentAmount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts"></a>

```go
func PutTimeouts(value SavingsplansSavingsPlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `ResetPurchaseTime` <a name="ResetPurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime"></a>

```go
func ResetPurchaseTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpfrontPaymentAmount` <a name="ResetUpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount"></a>

```go
func ResetUpfrontPaymentAmount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

savingsplanssavingsplan.SavingsplansSavingsPlan_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

savingsplanssavingsplan.SavingsplansSavingsPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

savingsplanssavingsplan.SavingsplansSavingsPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

savingsplanssavingsplan.SavingsplansSavingsPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SavingsplansSavingsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency">Currency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily">Ec2InstanceFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId">OfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption">PaymentOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes">ProductTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount">RecurringPaymentAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil">ReturnableUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn">SavingsPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId">SavingsPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType">SavingsPlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds">TermDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput">CommitmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput">PurchaseTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput">SavingsPlanOfferingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput">UpfrontPaymentAmountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment">Commitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime">PurchaseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId">SavingsPlanOfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount">UpfrontPaymentAmount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency"></a>

```go
func Currency() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Ec2InstanceFamily`<sup>Required</sup> <a name="Ec2InstanceFamily" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```go
func Ec2InstanceFamily() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId"></a>

```go
func OfferingId() *string
```

- *Type:* *string

---

##### `PaymentOption`<sup>Required</sup> <a name="PaymentOption" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption"></a>

```go
func PaymentOption() *string
```

- *Type:* *string

---

##### `ProductTypes`<sup>Required</sup> <a name="ProductTypes" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes"></a>

```go
func ProductTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RecurringPaymentAmount`<sup>Required</sup> <a name="RecurringPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```go
func RecurringPaymentAmount() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReturnableUntil`<sup>Required</sup> <a name="ReturnableUntil" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil"></a>

```go
func ReturnableUntil() *string
```

- *Type:* *string

---

##### `SavingsPlanArn`<sup>Required</sup> <a name="SavingsPlanArn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn"></a>

```go
func SavingsPlanArn() *string
```

- *Type:* *string

---

##### `SavingsPlanId`<sup>Required</sup> <a name="SavingsPlanId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId"></a>

```go
func SavingsPlanId() *string
```

- *Type:* *string

---

##### `SavingsPlanType`<sup>Required</sup> <a name="SavingsPlanType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType"></a>

```go
func SavingsPlanType() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TermDurationInSeconds`<sup>Required</sup> <a name="TermDurationInSeconds" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```go
func TermDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts"></a>

```go
func Timeouts() SavingsplansSavingsPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a>

---

##### `CommitmentInput`<sup>Optional</sup> <a name="CommitmentInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput"></a>

```go
func CommitmentInput() *string
```

- *Type:* *string

---

##### `PurchaseTimeInput`<sup>Optional</sup> <a name="PurchaseTimeInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput"></a>

```go
func PurchaseTimeInput() *string
```

- *Type:* *string

---

##### `SavingsPlanOfferingIdInput`<sup>Optional</sup> <a name="SavingsPlanOfferingIdInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput"></a>

```go
func SavingsPlanOfferingIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpfrontPaymentAmountInput`<sup>Optional</sup> <a name="UpfrontPaymentAmountInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput"></a>

```go
func UpfrontPaymentAmountInput() *string
```

- *Type:* *string

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment"></a>

```go
func Commitment() *string
```

- *Type:* *string

---

##### `PurchaseTime`<sup>Required</sup> <a name="PurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime"></a>

```go
func PurchaseTime() *string
```

- *Type:* *string

---

##### `SavingsPlanOfferingId`<sup>Required</sup> <a name="SavingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```go
func SavingsPlanOfferingId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UpfrontPaymentAmount`<sup>Required</sup> <a name="UpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```go
func UpfrontPaymentAmount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SavingsplansSavingsPlanConfig <a name="SavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

&savingsplanssavingsplan.SavingsplansSavingsPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Commitment: *string,
	SavingsPlanOfferingId: *string,
	PurchaseTime: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts,
	UpfrontPaymentAmount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment">Commitment</a></code> | <code>*string</code> | The hourly commitment, in USD. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId">SavingsPlanOfferingId</a></code> | <code>*string</code> | The unique ID of a Savings Plan offering. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime">PurchaseTime</a></code> | <code>*string</code> | The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount">UpfrontPaymentAmount</a></code> | <code>*string</code> | The up-front payment amount. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment"></a>

```go
Commitment *string
```

- *Type:* *string

The hourly commitment, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}

---

##### `SavingsPlanOfferingId`<sup>Required</sup> <a name="SavingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId"></a>

```go
SavingsPlanOfferingId *string
```

- *Type:* *string

The unique ID of a Savings Plan offering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}

---

##### `PurchaseTime`<sup>Optional</sup> <a name="PurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime"></a>

```go
PurchaseTime *string
```

- *Type:* *string

The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts"></a>

```go
Timeouts SavingsplansSavingsPlanTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}

---

##### `UpfrontPaymentAmount`<sup>Optional</sup> <a name="UpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount"></a>

```go
UpfrontPaymentAmount *string
```

- *Type:* *string

The up-front payment amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}

---

### SavingsplansSavingsPlanTimeouts <a name="SavingsplansSavingsPlanTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

&savingsplanssavingsplan.SavingsplansSavingsPlanTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#create SavingsplansSavingsPlan#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#delete SavingsplansSavingsPlan#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### SavingsplansSavingsPlanTimeoutsOutputReference <a name="SavingsplansSavingsPlanTimeoutsOutputReference" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/savingsplanssavingsplan"

savingsplanssavingsplan.NewSavingsplansSavingsPlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SavingsplansSavingsPlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



