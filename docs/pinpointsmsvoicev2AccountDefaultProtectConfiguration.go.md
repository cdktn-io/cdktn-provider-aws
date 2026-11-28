# `pinpointsmsvoicev2AccountDefaultProtectConfiguration` Submodule <a name="`pinpointsmsvoicev2AccountDefaultProtectConfiguration` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2AccountDefaultProtectConfiguration <a name="Pinpointsmsvoicev2AccountDefaultProtectConfiguration" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_account_default_protect_configuration aws_pinpointsmsvoicev2_account_default_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pinpointsmsvoicev2accountdefaultprotectconfiguration"

pinpointsmsvoicev2accountdefaultprotectconfiguration.NewPinpointsmsvoicev2AccountDefaultProtectConfiguration(scope Construct, id *string, config Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig) Pinpointsmsvoicev2AccountDefaultProtectConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig">Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig">Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2AccountDefaultProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pinpointsmsvoicev2accountdefaultprotectconfiguration"

pinpointsmsvoicev2accountdefaultprotectconfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pinpointsmsvoicev2accountdefaultprotectconfiguration"

pinpointsmsvoicev2accountdefaultprotectconfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pinpointsmsvoicev2accountdefaultprotectconfiguration"

pinpointsmsvoicev2accountdefaultprotectconfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pinpointsmsvoicev2accountdefaultprotectconfiguration"

pinpointsmsvoicev2accountdefaultprotectconfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Pinpointsmsvoicev2AccountDefaultProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Pinpointsmsvoicev2AccountDefaultProtectConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Pinpointsmsvoicev2AccountDefaultProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_account_default_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2AccountDefaultProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.protectConfigurationIdInput">ProtectConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProtectConfigurationIdInput`<sup>Optional</sup> <a name="ProtectConfigurationIdInput" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.protectConfigurationIdInput"></a>

```go
func ProtectConfigurationIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.protectConfigurationId"></a>

```go
func ProtectConfigurationId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig <a name="Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/pinpointsmsvoicev2accountdefaultprotectconfiguration"

&pinpointsmsvoicev2accountdefaultprotectconfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ProtectConfigurationId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_account_default_protect_configuration#protect_configuration_id Pinpointsmsvoicev2AccountDefaultProtectConfiguration#protect_configuration_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.protectConfigurationId"></a>

```go
ProtectConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_account_default_protect_configuration#protect_configuration_id Pinpointsmsvoicev2AccountDefaultProtectConfiguration#protect_configuration_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2AccountDefaultProtectConfiguration.Pinpointsmsvoicev2AccountDefaultProtectConfigurationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_account_default_protect_configuration#region Pinpointsmsvoicev2AccountDefaultProtectConfiguration#region}

---



