# `resiliencehubv2InputSource` Submodule <a name="`resiliencehubv2InputSource` Submodule" id="@cdktn/provider-aws.resiliencehubv2InputSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2InputSource <a name="Resiliencehubv2InputSource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source aws_resiliencehubv2_input_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.NewResiliencehubv2InputSource(scope Construct, id *string, config Resiliencehubv2InputSourceConfig) Resiliencehubv2InputSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig">Resiliencehubv2InputSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig">Resiliencehubv2InputSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration">PutResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetResourceConfiguration">ResetResourceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceConfiguration` <a name="PutResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration"></a>

```go
func PutResourceConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.putResourceConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceConfiguration` <a name="ResetResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.resetResourceConfiguration"></a>

```go
func ResetResourceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2InputSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.Resiliencehubv2InputSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.Resiliencehubv2InputSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.Resiliencehubv2InputSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.Resiliencehubv2InputSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Resiliencehubv2InputSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Resiliencehubv2InputSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Resiliencehubv2InputSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2InputSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.inputSourceId">InputSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfiguration">ResourceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList">Resiliencehubv2InputSourceResourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfigurationInput">ResourceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArnInput">ServiceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InputSourceId`<sup>Required</sup> <a name="InputSourceId" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.inputSourceId"></a>

```go
func InputSourceId() *string
```

- *Type:* *string

---

##### `ResourceConfiguration`<sup>Required</sup> <a name="ResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfiguration"></a>

```go
func ResourceConfiguration() Resiliencehubv2InputSourceResourceConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList">Resiliencehubv2InputSourceResourceConfigurationList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationInput`<sup>Optional</sup> <a name="ResourceConfigurationInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.resourceConfigurationInput"></a>

```go
func ResourceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceArnInput`<sup>Optional</sup> <a name="ServiceArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArnInput"></a>

```go
func ServiceArnInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2InputSourceConfig <a name="Resiliencehubv2InputSourceConfig" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

&resiliencehubv2inputsource.Resiliencehubv2InputSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceArn: *string,
	Region: *string,
	ResourceConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.resourceConfiguration">ResourceConfiguration</a></code> | <code>interface{}</code> | resource_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.serviceArn"></a>

```go
ServiceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#region Resiliencehubv2InputSource#region}

---

##### `ResourceConfiguration`<sup>Optional</sup> <a name="ResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceConfig.property.resourceConfiguration"></a>

```go
ResourceConfiguration interface{}
```

- *Type:* interface{}

resource_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#resource_configuration Resiliencehubv2InputSource#resource_configuration}

---

### Resiliencehubv2InputSourceResourceConfiguration <a name="Resiliencehubv2InputSourceResourceConfiguration" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

&resiliencehubv2inputsource.Resiliencehubv2InputSourceResourceConfiguration {
	CfnStackArn: *string,
	DesignFileS3Url: *string,
	Eks: interface{},
	ResourceTag: interface{},
	TfStateFileUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.cfnStackArn">CfnStackArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#cfn_stack_arn Resiliencehubv2InputSource#cfn_stack_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.designFileS3Url">DesignFileS3Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#design_file_s3_url Resiliencehubv2InputSource#design_file_s3_url}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.eks">Eks</a></code> | <code>interface{}</code> | eks block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.resourceTag">ResourceTag</a></code> | <code>interface{}</code> | resource_tag block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.tfStateFileUrl">TfStateFileUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#tf_state_file_url Resiliencehubv2InputSource#tf_state_file_url}. |

---

##### `CfnStackArn`<sup>Optional</sup> <a name="CfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.cfnStackArn"></a>

```go
CfnStackArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#cfn_stack_arn Resiliencehubv2InputSource#cfn_stack_arn}.

---

##### `DesignFileS3Url`<sup>Optional</sup> <a name="DesignFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.designFileS3Url"></a>

```go
DesignFileS3Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#design_file_s3_url Resiliencehubv2InputSource#design_file_s3_url}.

---

##### `Eks`<sup>Optional</sup> <a name="Eks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.eks"></a>

```go
Eks interface{}
```

- *Type:* interface{}

eks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#eks Resiliencehubv2InputSource#eks}

---

##### `ResourceTag`<sup>Optional</sup> <a name="ResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.resourceTag"></a>

```go
ResourceTag interface{}
```

- *Type:* interface{}

resource_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#resource_tag Resiliencehubv2InputSource#resource_tag}

---

##### `TfStateFileUrl`<sup>Optional</sup> <a name="TfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfiguration.property.tfStateFileUrl"></a>

```go
TfStateFileUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#tf_state_file_url Resiliencehubv2InputSource#tf_state_file_url}.

---

### Resiliencehubv2InputSourceResourceConfigurationEks <a name="Resiliencehubv2InputSourceResourceConfigurationEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

&resiliencehubv2inputsource.Resiliencehubv2InputSourceResourceConfigurationEks {
	ClusterArn: *string,
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#cluster_arn Resiliencehubv2InputSource#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#namespaces Resiliencehubv2InputSource#namespaces}. |

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.clusterArn"></a>

```go
ClusterArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#cluster_arn Resiliencehubv2InputSource#cluster_arn}.

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEks.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#namespaces Resiliencehubv2InputSource#namespaces}.

---

### Resiliencehubv2InputSourceResourceConfigurationResourceTag <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

&resiliencehubv2inputsource.Resiliencehubv2InputSourceResourceConfigurationResourceTag {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTag.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2InputSourceResourceConfigurationEksList <a name="Resiliencehubv2InputSourceResourceConfigurationEksList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.NewResiliencehubv2InputSourceResourceConfigurationEksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resiliencehubv2InputSourceResourceConfigurationEksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get"></a>

```go
func Get(index *f64) Resiliencehubv2InputSourceResourceConfigurationEksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2InputSourceResourceConfigurationEksOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationEksOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.NewResiliencehubv2InputSourceResourceConfigurationEksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resiliencehubv2InputSourceResourceConfigurationEksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArnInput"></a>

```go
func ClusterArnInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2InputSourceResourceConfigurationList <a name="Resiliencehubv2InputSourceResourceConfigurationList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.NewResiliencehubv2InputSourceResourceConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resiliencehubv2InputSourceResourceConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get"></a>

```go
func Get(index *f64) Resiliencehubv2InputSourceResourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2InputSourceResourceConfigurationOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.NewResiliencehubv2InputSourceResourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resiliencehubv2InputSourceResourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks">PutEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag">PutResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetCfnStackArn">ResetCfnStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetDesignFileS3Url">ResetDesignFileS3Url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetEks">ResetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetResourceTag">ResetResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetTfStateFileUrl">ResetTfStateFileUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEks` <a name="PutEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks"></a>

```go
func PutEks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putEks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceTag` <a name="PutResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag"></a>

```go
func PutResourceTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.putResourceTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCfnStackArn` <a name="ResetCfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetCfnStackArn"></a>

```go
func ResetCfnStackArn()
```

##### `ResetDesignFileS3Url` <a name="ResetDesignFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetDesignFileS3Url"></a>

```go
func ResetDesignFileS3Url()
```

##### `ResetEks` <a name="ResetEks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetEks"></a>

```go
func ResetEks()
```

##### `ResetResourceTag` <a name="ResetResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetResourceTag"></a>

```go
func ResetResourceTag()
```

##### `ResetTfStateFileUrl` <a name="ResetTfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.resetTfStateFileUrl"></a>

```go
func ResetTfStateFileUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList">Resiliencehubv2InputSourceResourceConfigurationEksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTag">ResourceTag</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList">Resiliencehubv2InputSourceResourceConfigurationResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArnInput">CfnStackArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3UrlInput">DesignFileS3UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eksInput">EksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTagInput">ResourceTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrlInput">TfStateFileUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArn">CfnStackArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3Url">DesignFileS3Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrl">TfStateFileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Eks`<sup>Required</sup> <a name="Eks" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eks"></a>

```go
func Eks() Resiliencehubv2InputSourceResourceConfigurationEksList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationEksList">Resiliencehubv2InputSourceResourceConfigurationEksList</a>

---

##### `ResourceTag`<sup>Required</sup> <a name="ResourceTag" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTag"></a>

```go
func ResourceTag() Resiliencehubv2InputSourceResourceConfigurationResourceTagList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList">Resiliencehubv2InputSourceResourceConfigurationResourceTagList</a>

---

##### `CfnStackArnInput`<sup>Optional</sup> <a name="CfnStackArnInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArnInput"></a>

```go
func CfnStackArnInput() *string
```

- *Type:* *string

---

##### `DesignFileS3UrlInput`<sup>Optional</sup> <a name="DesignFileS3UrlInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3UrlInput"></a>

```go
func DesignFileS3UrlInput() *string
```

- *Type:* *string

---

##### `EksInput`<sup>Optional</sup> <a name="EksInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.eksInput"></a>

```go
func EksInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTagInput`<sup>Optional</sup> <a name="ResourceTagInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.resourceTagInput"></a>

```go
func ResourceTagInput() interface{}
```

- *Type:* interface{}

---

##### `TfStateFileUrlInput`<sup>Optional</sup> <a name="TfStateFileUrlInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrlInput"></a>

```go
func TfStateFileUrlInput() *string
```

- *Type:* *string

---

##### `CfnStackArn`<sup>Required</sup> <a name="CfnStackArn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.cfnStackArn"></a>

```go
func CfnStackArn() *string
```

- *Type:* *string

---

##### `DesignFileS3Url`<sup>Required</sup> <a name="DesignFileS3Url" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.designFileS3Url"></a>

```go
func DesignFileS3Url() *string
```

- *Type:* *string

---

##### `TfStateFileUrl`<sup>Required</sup> <a name="TfStateFileUrl" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```go
func TfStateFileUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2InputSourceResourceConfigurationResourceTagList <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTagList" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.NewResiliencehubv2InputSourceResourceConfigurationResourceTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resiliencehubv2InputSourceResourceConfigurationResourceTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get"></a>

```go
func Get(index *f64) Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference <a name="Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2inputsource"

resiliencehubv2inputsource.NewResiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2InputSource.Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



