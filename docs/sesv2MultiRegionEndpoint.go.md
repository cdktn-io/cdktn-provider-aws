# `sesv2MultiRegionEndpoint` Submodule <a name="`sesv2MultiRegionEndpoint` Submodule" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2MultiRegionEndpoint <a name="Sesv2MultiRegionEndpoint" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint aws_sesv2_multi_region_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpoint(scope Construct, id *string, config Sesv2MultiRegionEndpointConfig) Sesv2MultiRegionEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig">Sesv2MultiRegionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig">Sesv2MultiRegionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails"></a>

```go
func PutDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value Sesv2MultiRegionEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails"></a>

```go
func ResetDetails()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.Sesv2MultiRegionEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.Sesv2MultiRegionEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.Sesv2MultiRegionEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.Sesv2MultiRegionEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Sesv2MultiRegionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Sesv2MultiRegionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Sesv2MultiRegionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details">Details</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes">Routes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput">DetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details"></a>

```go
func Details() Sesv2MultiRegionEndpointDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a>

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes"></a>

```go
func Routes() Sesv2MultiRegionEndpointRoutesList
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts"></a>

```go
func Timeouts() Sesv2MultiRegionEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a>

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput"></a>

```go
func DetailsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2MultiRegionEndpointConfig <a name="Sesv2MultiRegionEndpointConfig" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

&sesv2multiregionendpoint.Sesv2MultiRegionEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointName: *string,
	Details: interface{},
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details">Details</a></code> | <code>interface{}</code> | details block. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}.

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details"></a>

```go
Details interface{}
```

- *Type:* interface{}

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#details Sesv2MultiRegionEndpoint#details}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts"></a>

```go
Timeouts Sesv2MultiRegionEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#timeouts Sesv2MultiRegionEndpoint#timeouts}

---

### Sesv2MultiRegionEndpointDetails <a name="Sesv2MultiRegionEndpointDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

&sesv2multiregionendpoint.Sesv2MultiRegionEndpointDetails {
	RoutesDetails: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails">RoutesDetails</a></code> | <code>interface{}</code> | routes_details block. |

---

##### `RoutesDetails`<sup>Optional</sup> <a name="RoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails"></a>

```go
RoutesDetails interface{}
```

- *Type:* interface{}

routes_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#routes_details Sesv2MultiRegionEndpoint#routes_details}

---

### Sesv2MultiRegionEndpointDetailsRoutesDetails <a name="Sesv2MultiRegionEndpointDetailsRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

&sesv2multiregionendpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails {
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}.

---

### Sesv2MultiRegionEndpointRoutes <a name="Sesv2MultiRegionEndpointRoutes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

&sesv2multiregionendpoint.Sesv2MultiRegionEndpointRoutes {

}
```


### Sesv2MultiRegionEndpointTimeouts <a name="Sesv2MultiRegionEndpointTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

&sesv2multiregionendpoint.Sesv2MultiRegionEndpointTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#create Sesv2MultiRegionEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#delete Sesv2MultiRegionEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2MultiRegionEndpointDetailsList <a name="Sesv2MultiRegionEndpointDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpointDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Sesv2MultiRegionEndpointDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get"></a>

```go
func Get(index *f64) Sesv2MultiRegionEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Sesv2MultiRegionEndpointDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Sesv2MultiRegionEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails">PutRoutesDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails">ResetRoutesDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoutesDetails` <a name="PutRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails"></a>

```go
func PutRoutesDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRoutesDetails` <a name="ResetRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails"></a>

```go
func ResetRoutesDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails">RoutesDetails</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput">RoutesDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoutesDetails`<sup>Required</sup> <a name="RoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails"></a>

```go
func RoutesDetails() Sesv2MultiRegionEndpointDetailsRoutesDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a>

---

##### `RoutesDetailsInput`<sup>Optional</sup> <a name="RoutesDetailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput"></a>

```go
func RoutesDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsList <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpointDetailsRoutesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Sesv2MultiRegionEndpointDetailsRoutesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get"></a>

```go
func Get(index *f64) Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Sesv2MultiRegionEndpointRoutesList <a name="Sesv2MultiRegionEndpointRoutesList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpointRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Sesv2MultiRegionEndpointRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get"></a>

```go
func Get(index *f64) Sesv2MultiRegionEndpointRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Sesv2MultiRegionEndpointRoutesOutputReference <a name="Sesv2MultiRegionEndpointRoutesOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpointRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Sesv2MultiRegionEndpointRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() Sesv2MultiRegionEndpointRoutes
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a>

---


### Sesv2MultiRegionEndpointTimeoutsOutputReference <a name="Sesv2MultiRegionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/sesv2multiregionendpoint"

sesv2multiregionendpoint.NewSesv2MultiRegionEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Sesv2MultiRegionEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



