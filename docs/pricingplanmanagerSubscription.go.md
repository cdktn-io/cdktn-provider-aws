# `pricingplanmanagerSubscription` Submodule <a name="`pricingplanmanagerSubscription` Submodule" id="@cdktn/provider-aws.pricingplanmanagerSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PricingplanmanagerSubscription <a name="PricingplanmanagerSubscription" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription aws_pricingplanmanager_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.NewPricingplanmanagerSubscription(scope Construct, id *string, config PricingplanmanagerSubscriptionConfig) PricingplanmanagerSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig">PricingplanmanagerSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig">PricingplanmanagerSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode">ResetApprovalMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel">ResetUsageLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts"></a>

```go
func PutTimeouts(value PricingplanmanagerSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `ResetApprovalMode` <a name="ResetApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode"></a>

```go
func ResetApprovalMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUsageLevel` <a name="ResetUsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel"></a>

```go
func ResetUsageLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.PricingplanmanagerSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.PricingplanmanagerSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.PricingplanmanagerSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.PricingplanmanagerSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PricingplanmanagerSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PricingplanmanagerSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PricingplanmanagerSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange">ScheduledChange</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput">ApprovalModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput">PlanFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput">PlanTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput">UsageLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode">ApprovalMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily">PlanFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier">PlanTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel">UsageLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ScheduledChange`<sup>Required</sup> <a name="ScheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange"></a>

```go
func ScheduledChange() PricingplanmanagerSubscriptionScheduledChangeList
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts"></a>

```go
func Timeouts() PricingplanmanagerSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a>

---

##### `ApprovalModeInput`<sup>Optional</sup> <a name="ApprovalModeInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput"></a>

```go
func ApprovalModeInput() *string
```

- *Type:* *string

---

##### `PlanFamilyInput`<sup>Optional</sup> <a name="PlanFamilyInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput"></a>

```go
func PlanFamilyInput() *string
```

- *Type:* *string

---

##### `PlanTierInput`<sup>Optional</sup> <a name="PlanTierInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput"></a>

```go
func PlanTierInput() *string
```

- *Type:* *string

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput"></a>

```go
func ResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsageLevelInput`<sup>Optional</sup> <a name="UsageLevelInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput"></a>

```go
func UsageLevelInput() *string
```

- *Type:* *string

---

##### `ApprovalMode`<sup>Required</sup> <a name="ApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode"></a>

```go
func ApprovalMode() *string
```

- *Type:* *string

---

##### `PlanFamily`<sup>Required</sup> <a name="PlanFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily"></a>

```go
func PlanFamily() *string
```

- *Type:* *string

---

##### `PlanTier`<sup>Required</sup> <a name="PlanTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier"></a>

```go
func PlanTier() *string
```

- *Type:* *string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns"></a>

```go
func ResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `UsageLevel`<sup>Required</sup> <a name="UsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel"></a>

```go
func UsageLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PricingplanmanagerSubscriptionConfig <a name="PricingplanmanagerSubscriptionConfig" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

&pricingplanmanagersubscription.PricingplanmanagerSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PlanFamily: *string,
	PlanTier: *string,
	ResourceArns: *[]*string,
	ApprovalMode: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v26.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts,
	UsageLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily">PlanFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier">PlanTier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode">ApprovalMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel">UsageLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PlanFamily`<sup>Required</sup> <a name="PlanFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily"></a>

```go
PlanFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}.

---

##### `PlanTier`<sup>Required</sup> <a name="PlanTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier"></a>

```go
PlanTier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}.

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns"></a>

```go
ResourceArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}.

---

##### `ApprovalMode`<sup>Optional</sup> <a name="ApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode"></a>

```go
ApprovalMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts"></a>

```go
Timeouts PricingplanmanagerSubscriptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#timeouts PricingplanmanagerSubscription#timeouts}

---

##### `UsageLevel`<sup>Optional</sup> <a name="UsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel"></a>

```go
UsageLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}.

---

### PricingplanmanagerSubscriptionScheduledChange <a name="PricingplanmanagerSubscriptionScheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

&pricingplanmanagersubscription.PricingplanmanagerSubscriptionScheduledChange {

}
```


### PricingplanmanagerSubscriptionTimeouts <a name="PricingplanmanagerSubscriptionTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

&pricingplanmanagersubscription.PricingplanmanagerSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#create PricingplanmanagerSubscription#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#delete PricingplanmanagerSubscription#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/pricingplanmanager_subscription#update PricingplanmanagerSubscription#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PricingplanmanagerSubscriptionScheduledChangeList <a name="PricingplanmanagerSubscriptionScheduledChangeList" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.NewPricingplanmanagerSubscriptionScheduledChangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PricingplanmanagerSubscriptionScheduledChangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get"></a>

```go
func Get(index *f64) PricingplanmanagerSubscriptionScheduledChangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### PricingplanmanagerSubscriptionScheduledChangeOutputReference <a name="PricingplanmanagerSubscriptionScheduledChangeOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.NewPricingplanmanagerSubscriptionScheduledChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PricingplanmanagerSubscriptionScheduledChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType">ChangeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate">EffectiveDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier">PlanTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel">UsageLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeType`<sup>Required</sup> <a name="ChangeType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType"></a>

```go
func ChangeType() *string
```

- *Type:* *string

---

##### `EffectiveDate`<sup>Required</sup> <a name="EffectiveDate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate"></a>

```go
func EffectiveDate() *string
```

- *Type:* *string

---

##### `PlanTier`<sup>Required</sup> <a name="PlanTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier"></a>

```go
func PlanTier() *string
```

- *Type:* *string

---

##### `UsageLevel`<sup>Required</sup> <a name="UsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel"></a>

```go
func UsageLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() PricingplanmanagerSubscriptionScheduledChange
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a>

---


### PricingplanmanagerSubscriptionTimeoutsOutputReference <a name="PricingplanmanagerSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pricingplanmanagersubscription"

pricingplanmanagersubscription.NewPricingplanmanagerSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PricingplanmanagerSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



