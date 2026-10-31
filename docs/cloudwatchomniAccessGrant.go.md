# `cloudwatchomniAccessGrant` Submodule <a name="`cloudwatchomniAccessGrant` Submodule" id="@cdktn/provider-aws.cloudwatchomniAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniAccessGrant <a name="CloudwatchomniAccessGrant" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant aws_cloudwatchomni_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrant(scope Construct, id *string, config CloudwatchomniAccessGrantConfig) CloudwatchomniAccessGrant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig">CloudwatchomniAccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig">CloudwatchomniAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putScopedAction">PutScopedAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetScopedAction">ResetScopedAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putPrincipal"></a>

```go
func PutPrincipal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putPrincipal.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScopedAction` <a name="PutScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putScopedAction"></a>

```go
func PutScopedAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putScopedAction.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScopedAction` <a name="ResetScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetScopedAction"></a>

```go
func ResetScopedAction()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniAccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.CloudwatchomniAccessGrant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.CloudwatchomniAccessGrant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.CloudwatchomniAccessGrant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.CloudwatchomniAccessGrant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchomniAccessGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchomniAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchomniAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantId">GrantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantType">GrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList">CloudwatchomniAccessGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedAction">ScopedAction</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList">CloudwatchomniAccessGrantScopedActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedActionInput">ScopedActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceIdInput">SpaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceId">SpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantId"></a>

```go
func GrantId() *string
```

- *Type:* *string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantType"></a>

```go
func GrantType() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principal"></a>

```go
func Principal() CloudwatchomniAccessGrantPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList">CloudwatchomniAccessGrantPrincipalList</a>

---

##### `ScopedAction`<sup>Required</sup> <a name="ScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedAction"></a>

```go
func ScopedAction() CloudwatchomniAccessGrantScopedActionList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList">CloudwatchomniAccessGrantScopedActionList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScopedActionInput`<sup>Optional</sup> <a name="ScopedActionInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedActionInput"></a>

```go
func ScopedActionInput() interface{}
```

- *Type:* interface{}

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceIdInput"></a>

```go
func SpaceIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceId"></a>

```go
func SpaceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniAccessGrantConfig <a name="CloudwatchomniAccessGrantConfig" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

&cloudwatchomniaccessgrant.CloudwatchomniAccessGrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainId: *string,
	Name: *string,
	Permission: *string,
	SpaceId: *string,
	Principal: interface{},
	Region: *string,
	ScopedAction: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.domainId">DomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#domain_id CloudwatchomniAccessGrant#domain_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#name CloudwatchomniAccessGrant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#permission CloudwatchomniAccessGrant#permission}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.spaceId">SpaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#space_id CloudwatchomniAccessGrant#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.principal">Principal</a></code> | <code>interface{}</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.scopedAction">ScopedAction</a></code> | <code>interface{}</code> | scoped_action block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#domain_id CloudwatchomniAccessGrant#domain_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#name CloudwatchomniAccessGrant#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#permission CloudwatchomniAccessGrant#permission}.

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.spaceId"></a>

```go
SpaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#space_id CloudwatchomniAccessGrant#space_id}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.principal"></a>

```go
Principal interface{}
```

- *Type:* interface{}

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal CloudwatchomniAccessGrant#principal}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#region CloudwatchomniAccessGrant#region}

---

##### `ScopedAction`<sup>Optional</sup> <a name="ScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.scopedAction"></a>

```go
ScopedAction interface{}
```

- *Type:* interface{}

scoped_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#scoped_action CloudwatchomniAccessGrant#scoped_action}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}.

---

### CloudwatchomniAccessGrantPrincipal <a name="CloudwatchomniAccessGrantPrincipal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

&cloudwatchomniaccessgrant.CloudwatchomniAccessGrantPrincipal {
	PrincipalType: *string,
	PrincipalAttribute: interface{},
	PrincipalId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_type CloudwatchomniAccessGrant#principal_type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalAttribute">PrincipalAttribute</a></code> | <code>interface{}</code> | principal_attribute block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_id CloudwatchomniAccessGrant#principal_id}. |

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_type CloudwatchomniAccessGrant#principal_type}.

---

##### `PrincipalAttribute`<sup>Optional</sup> <a name="PrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalAttribute"></a>

```go
PrincipalAttribute interface{}
```

- *Type:* interface{}

principal_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_attribute CloudwatchomniAccessGrant#principal_attribute}

---

##### `PrincipalId`<sup>Optional</sup> <a name="PrincipalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_id CloudwatchomniAccessGrant#principal_id}.

---

### CloudwatchomniAccessGrantPrincipalPrincipalAttribute <a name="CloudwatchomniAccessGrantPrincipalPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

&cloudwatchomniaccessgrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#key CloudwatchomniAccessGrant#key}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#value CloudwatchomniAccessGrant#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#key CloudwatchomniAccessGrant#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#value CloudwatchomniAccessGrant#value}.

---

### CloudwatchomniAccessGrantScopedAction <a name="CloudwatchomniAccessGrantScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

&cloudwatchomniaccessgrant.CloudwatchomniAccessGrantScopedAction {
	Actions: *[]*string,
	Resource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#actions CloudwatchomniAccessGrant#actions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.resource">Resource</a></code> | <code>interface{}</code> | resource block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#actions CloudwatchomniAccessGrant#actions}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.resource"></a>

```go
Resource interface{}
```

- *Type:* interface{}

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource CloudwatchomniAccessGrant#resource}

---

### CloudwatchomniAccessGrantScopedActionResource <a name="CloudwatchomniAccessGrantScopedActionResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

&cloudwatchomniaccessgrant.CloudwatchomniAccessGrantScopedActionResource {
	ResourceType: *string,
	ResourceArns: *[]*string,
	RowScopeGroup: interface{},
	SignalTypes: *[]*string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_type CloudwatchomniAccessGrant#resource_type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_arns CloudwatchomniAccessGrant#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.rowScopeGroup">RowScopeGroup</a></code> | <code>interface{}</code> | row_scope_group block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.signalTypes">SignalTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#signal_types CloudwatchomniAccessGrant#signal_types}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_type CloudwatchomniAccessGrant#resource_type}.

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceArns"></a>

```go
ResourceArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_arns CloudwatchomniAccessGrant#resource_arns}.

---

##### `RowScopeGroup`<sup>Optional</sup> <a name="RowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.rowScopeGroup"></a>

```go
RowScopeGroup interface{}
```

- *Type:* interface{}

row_scope_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#row_scope_group CloudwatchomniAccessGrant#row_scope_group}

---

##### `SignalTypes`<sup>Optional</sup> <a name="SignalTypes" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.signalTypes"></a>

```go
SignalTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#signal_types CloudwatchomniAccessGrant#signal_types}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}.

---

### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

&cloudwatchomniaccessgrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup {
	RowScope: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup.property.rowScope">RowScope</a></code> | <code>interface{}</code> | row_scope block. |

---

##### `RowScope`<sup>Optional</sup> <a name="RowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup.property.rowScope"></a>

```go
RowScope interface{}
```

- *Type:* interface{}

row_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#row_scope CloudwatchomniAccessGrant#row_scope}

---

### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

&cloudwatchomniaccessgrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope {
	Field: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.field">Field</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#field CloudwatchomniAccessGrant#field}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#operator CloudwatchomniAccessGrant#operator}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#values CloudwatchomniAccessGrant#values}. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.field"></a>

```go
Field *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#field CloudwatchomniAccessGrant#field}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#operator CloudwatchomniAccessGrant#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#values CloudwatchomniAccessGrant#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniAccessGrantPrincipalList <a name="CloudwatchomniAccessGrantPrincipalList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantPrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniAccessGrantPrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.get"></a>

```go
func Get(index *f64) CloudwatchomniAccessGrantPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantPrincipalOutputReference <a name="CloudwatchomniAccessGrantPrincipalOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniAccessGrantPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.putPrincipalAttribute">PutPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalAttribute">ResetPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalId">ResetPrincipalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalAttribute` <a name="PutPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.putPrincipalAttribute"></a>

```go
func PutPrincipalAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.putPrincipalAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipalAttribute` <a name="ResetPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalAttribute"></a>

```go
func ResetPrincipalAttribute()
```

##### `ResetPrincipalId` <a name="ResetPrincipalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalId"></a>

```go
func ResetPrincipalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttribute">PrincipalAttribute</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniAccessGrantPrincipalPrincipalAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttributeInput">PrincipalAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalAttribute`<sup>Required</sup> <a name="PrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttribute"></a>

```go
func PrincipalAttribute() CloudwatchomniAccessGrantPrincipalPrincipalAttributeList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniAccessGrantPrincipalPrincipalAttributeList</a>

---

##### `PrincipalAttributeInput`<sup>Optional</sup> <a name="PrincipalAttributeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttributeInput"></a>

```go
func PrincipalAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantPrincipalPrincipalAttributeList <a name="CloudwatchomniAccessGrantPrincipalPrincipalAttributeList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantPrincipalPrincipalAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniAccessGrantPrincipalPrincipalAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.get"></a>

```go
func Get(index *f64) CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference <a name="CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionList <a name="CloudwatchomniAccessGrantScopedActionList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniAccessGrantScopedActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.get"></a>

```go
func Get(index *f64) CloudwatchomniAccessGrantScopedActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionOutputReference <a name="CloudwatchomniAccessGrantScopedActionOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniAccessGrantScopedActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResource` <a name="PutResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.putResource"></a>

```go
func PutResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.putResource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList">CloudwatchomniAccessGrantScopedActionResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resource"></a>

```go
func Resource() CloudwatchomniAccessGrantScopedActionResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList">CloudwatchomniAccessGrantScopedActionResourceList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resourceInput"></a>

```go
func ResourceInput() interface{}
```

- *Type:* interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionResourceList <a name="CloudwatchomniAccessGrantScopedActionResourceList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniAccessGrantScopedActionResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.get"></a>

```go
func Get(index *f64) CloudwatchomniAccessGrantScopedActionResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionResourceOutputReference <a name="CloudwatchomniAccessGrantScopedActionResourceOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniAccessGrantScopedActionResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.putRowScopeGroup">PutRowScopeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetResourceArns">ResetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetRowScopeGroup">ResetRowScopeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetSignalTypes">ResetSignalTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRowScopeGroup` <a name="PutRowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.putRowScopeGroup"></a>

```go
func PutRowScopeGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.putRowScopeGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetResourceArns"></a>

```go
func ResetResourceArns()
```

##### `ResetRowScopeGroup` <a name="ResetRowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetRowScopeGroup"></a>

```go
func ResetRowScopeGroup()
```

##### `ResetSignalTypes` <a name="ResetSignalTypes" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetSignalTypes"></a>

```go
func ResetSignalTypes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroup">RowScopeGroup</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroupInput">RowScopeGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypesInput">SignalTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypes">SignalTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowScopeGroup`<sup>Required</sup> <a name="RowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroup"></a>

```go
func RowScopeGroup() CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList</a>

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArnsInput"></a>

```go
func ResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `RowScopeGroupInput`<sup>Optional</sup> <a name="RowScopeGroupInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroupInput"></a>

```go
func RowScopeGroupInput() interface{}
```

- *Type:* interface{}

---

##### `SignalTypesInput`<sup>Optional</sup> <a name="SignalTypesInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypesInput"></a>

```go
func SignalTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArns"></a>

```go
func ResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SignalTypes`<sup>Required</sup> <a name="SignalTypes" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypes"></a>

```go
func SignalTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.get"></a>

```go
func Get(index *f64) CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.putRowScope">PutRowScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resetRowScope">ResetRowScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRowScope` <a name="PutRowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.putRowScope"></a>

```go
func PutRowScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.putRowScope.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRowScope` <a name="ResetRowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resetRowScope"></a>

```go
func ResetRowScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScope">RowScope</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScopeInput">RowScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowScope`<sup>Required</sup> <a name="RowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScope"></a>

```go
func RowScope() CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList</a>

---

##### `RowScopeInput`<sup>Optional</sup> <a name="RowScopeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScopeInput"></a>

```go
func RowScopeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.get"></a>

```go
func Get(index *f64) CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/cloudwatchomniaccessgrant"

cloudwatchomniaccessgrant.NewCloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



