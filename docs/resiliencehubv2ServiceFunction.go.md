# `resiliencehubv2ServiceFunction` Submodule <a name="`resiliencehubv2ServiceFunction` Submodule" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2ServiceFunction <a name="Resiliencehubv2ServiceFunction" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function aws_resiliencehubv2_service_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2servicefunction"

resiliencehubv2servicefunction.NewResiliencehubv2ServiceFunction(scope Construct, id *string, config Resiliencehubv2ServiceFunctionConfig) Resiliencehubv2ServiceFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig">Resiliencehubv2ServiceFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig">Resiliencehubv2ServiceFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2ServiceFunction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2servicefunction"

resiliencehubv2servicefunction.Resiliencehubv2ServiceFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2servicefunction"

resiliencehubv2servicefunction.Resiliencehubv2ServiceFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2servicefunction"

resiliencehubv2servicefunction.Resiliencehubv2ServiceFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2servicefunction"

resiliencehubv2servicefunction.Resiliencehubv2ServiceFunction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Resiliencehubv2ServiceFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Resiliencehubv2ServiceFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Resiliencehubv2ServiceFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2ServiceFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceFunctionId">ServiceFunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticalityInput">CriticalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArnInput">ServiceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticality">Criticality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceFunctionId`<sup>Required</sup> <a name="ServiceFunctionId" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceFunctionId"></a>

```go
func ServiceFunctionId() *string
```

- *Type:* *string

---

##### `CriticalityInput`<sup>Optional</sup> <a name="CriticalityInput" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticalityInput"></a>

```go
func CriticalityInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceArnInput`<sup>Optional</sup> <a name="ServiceArnInput" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArnInput"></a>

```go
func ServiceArnInput() *string
```

- *Type:* *string

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.criticality"></a>

```go
func Criticality() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceFunctionConfig <a name="Resiliencehubv2ServiceFunctionConfig" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/resiliencehubv2servicefunction"

&resiliencehubv2servicefunction.Resiliencehubv2ServiceFunctionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Criticality: *string,
	Name: *string,
	ServiceArn: *string,
	Description: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.criticality">Criticality</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#criticality Resiliencehubv2ServiceFunction#criticality}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#name Resiliencehubv2ServiceFunction#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#service_arn Resiliencehubv2ServiceFunction#service_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#description Resiliencehubv2ServiceFunction#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.criticality"></a>

```go
Criticality *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#criticality Resiliencehubv2ServiceFunction#criticality}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#name Resiliencehubv2ServiceFunction#name}.

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.serviceArn"></a>

```go
ServiceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#service_arn Resiliencehubv2ServiceFunction#service_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#description Resiliencehubv2ServiceFunction#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2ServiceFunction.Resiliencehubv2ServiceFunctionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service_function#region Resiliencehubv2ServiceFunction#region}

---



