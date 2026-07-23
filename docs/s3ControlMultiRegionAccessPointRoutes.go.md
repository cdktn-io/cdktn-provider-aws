# `s3ControlMultiRegionAccessPointRoutes` Submodule <a name="`s3ControlMultiRegionAccessPointRoutes` Submodule" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPointRoutes <a name="S3ControlMultiRegionAccessPointRoutes" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes aws_s3control_multi_region_access_point_routes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

s3controlmultiregionaccesspointroutes.NewS3ControlMultiRegionAccessPointRoutes(scope Construct, id *string, config S3ControlMultiRegionAccessPointRoutesConfig) S3ControlMultiRegionAccessPointRoutes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig">S3ControlMultiRegionAccessPointRoutesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig">S3ControlMultiRegionAccessPointRoutesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute">PutRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRoute">ResetRoute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoute` <a name="PutRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute"></a>

```go
func PutRoute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoute` <a name="ResetRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRoute"></a>

```go
func ResetRoute()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3ControlMultiRegionAccessPointRoutes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

s3controlmultiregionaccesspointroutes.S3ControlMultiRegionAccessPointRoutes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

s3controlmultiregionaccesspointroutes.S3ControlMultiRegionAccessPointRoutes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

s3controlmultiregionaccesspointroutes.S3ControlMultiRegionAccessPointRoutes_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

s3controlmultiregionaccesspointroutes.S3ControlMultiRegionAccessPointRoutes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3ControlMultiRegionAccessPointRoutes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ControlMultiRegionAccessPointRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ControlMultiRegionAccessPointRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3ControlMultiRegionAccessPointRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.route">Route</a></code> | <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList">S3ControlMultiRegionAccessPointRoutesRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrapInput">MrapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.routeInput">RouteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrap">Mrap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.route"></a>

```go
func Route() S3ControlMultiRegionAccessPointRoutesRouteList
```

- *Type:* <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList">S3ControlMultiRegionAccessPointRoutesRouteList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MrapInput`<sup>Optional</sup> <a name="MrapInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrapInput"></a>

```go
func MrapInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.routeInput"></a>

```go
func RouteInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Mrap`<sup>Required</sup> <a name="Mrap" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrap"></a>

```go
func Mrap() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointRoutesConfig <a name="S3ControlMultiRegionAccessPointRoutesConfig" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

&s3controlmultiregionaccesspointroutes.S3ControlMultiRegionAccessPointRoutesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mrap: *string,
	AccountId: *string,
	Region: *string,
	Route: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.mrap">Mrap</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.route">Route</a></code> | <code>interface{}</code> | route block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mrap`<sup>Required</sup> <a name="Mrap" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.mrap"></a>

```go
Mrap *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}

---

##### `Route`<sup>Optional</sup> <a name="Route" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.route"></a>

```go
Route interface{}
```

- *Type:* interface{}

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#route S3ControlMultiRegionAccessPointRoutes#route}

---

### S3ControlMultiRegionAccessPointRoutesRoute <a name="S3ControlMultiRegionAccessPointRoutesRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

&s3controlmultiregionaccesspointroutes.S3ControlMultiRegionAccessPointRoutesRoute {
	Bucket: *string,
	Region: *string,
	TrafficDialPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#bucket S3ControlMultiRegionAccessPointRoutes#bucket}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#traffic_dial_percentage S3ControlMultiRegionAccessPointRoutes#traffic_dial_percentage}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#bucket S3ControlMultiRegionAccessPointRoutes#bucket}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}.

---

##### `TrafficDialPercentage`<sup>Required</sup> <a name="TrafficDialPercentage" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.trafficDialPercentage"></a>

```go
TrafficDialPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/s3control_multi_region_access_point_routes#traffic_dial_percentage S3ControlMultiRegionAccessPointRoutes#traffic_dial_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointRoutesRouteList <a name="S3ControlMultiRegionAccessPointRoutesRouteList" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

s3controlmultiregionaccesspointroutes.NewS3ControlMultiRegionAccessPointRoutesRouteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ControlMultiRegionAccessPointRoutesRouteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get"></a>

```go
func Get(index *f64) S3ControlMultiRegionAccessPointRoutesRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ControlMultiRegionAccessPointRoutesRouteOutputReference <a name="S3ControlMultiRegionAccessPointRoutesRouteOutputReference" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3controlmultiregionaccesspointroutes"

s3controlmultiregionaccesspointroutes.NewS3ControlMultiRegionAccessPointRoutesRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ControlMultiRegionAccessPointRoutesRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentageInput">TrafficDialPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TrafficDialPercentageInput`<sup>Optional</sup> <a name="TrafficDialPercentageInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentageInput"></a>

```go
func TrafficDialPercentageInput() *f64
```

- *Type:* *f64

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TrafficDialPercentage`<sup>Required</sup> <a name="TrafficDialPercentage" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentage"></a>

```go
func TrafficDialPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



