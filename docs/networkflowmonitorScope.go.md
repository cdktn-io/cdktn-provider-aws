# `networkflowmonitorScope` Submodule <a name="`networkflowmonitorScope` Submodule" id="@cdktf/provider-aws.networkflowmonitorScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorScope <a name="NetworkflowmonitorScope" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope aws_networkflowmonitor_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScope(scope Construct, id *string, config NetworkflowmonitorScopeConfig) NetworkflowmonitorScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget"></a>

```go
func PutTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts"></a>

```go
func PutTimeouts(value NetworkflowmonitorScopeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkflowmonitorScope resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NetworkflowmonitorScope_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkflowmonitorScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkflowmonitorScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkflowmonitorScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList">NetworkflowmonitorScopeTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference">NetworkflowmonitorScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn"></a>

```go
func ScopeArn() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.target"></a>

```go
func Target() NetworkflowmonitorScopeTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList">NetworkflowmonitorScopeTargetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeouts"></a>

```go
func Timeouts() NetworkflowmonitorScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference">NetworkflowmonitorScopeTimeoutsOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorScopeConfig <a name="NetworkflowmonitorScopeConfig" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
	Tags: *map[string]*string,
	Target: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.target">Target</a></code> | <code>interface{}</code> | target block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.target"></a>

```go
Target interface{}
```

- *Type:* interface{}

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#target NetworkflowmonitorScope#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.timeouts"></a>

```go
Timeouts NetworkflowmonitorScopeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#timeouts NetworkflowmonitorScope#timeouts}

---

### NetworkflowmonitorScopeTarget <a name="NetworkflowmonitorScopeTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTarget {
	Region: *string,
	TargetIdentifier: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.targetIdentifier">TargetIdentifier</a></code> | <code>interface{}</code> | target_identifier block. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}.

---

##### `TargetIdentifier`<sup>Optional</sup> <a name="TargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.targetIdentifier"></a>

```go
TargetIdentifier interface{}
```

- *Type:* interface{}

target_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#target_identifier NetworkflowmonitorScope#target_identifier}

---

### NetworkflowmonitorScopeTargetTargetIdentifier <a name="NetworkflowmonitorScopeTargetTargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTargetTargetIdentifier {
	TargetType: *string,
	TargetId: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetType">TargetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetId">TargetId</a></code> | <code>interface{}</code> | target_id block. |

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetId"></a>

```go
TargetId interface{}
```

- *Type:* interface{}

target_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#target_id NetworkflowmonitorScope#target_id}

---

### NetworkflowmonitorScopeTargetTargetIdentifierTargetId <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId {
	AccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}.

---

### NetworkflowmonitorScopeTimeouts <a name="NetworkflowmonitorScopeTimeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

&networkflowmonitorscope.NetworkflowmonitorScopeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#create NetworkflowmonitorScope#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#delete NetworkflowmonitorScope#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/networkflowmonitor_scope#update NetworkflowmonitorScope#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorScopeTargetList <a name="NetworkflowmonitorScopeTargetList" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorScopeTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorScopeTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetOutputReference <a name="NetworkflowmonitorScopeTargetOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorScopeTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier">PutTargetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resetTargetIdentifier">ResetTargetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetIdentifier` <a name="PutTargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier"></a>

```go
func PutTargetIdentifier(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTargetIdentifier` <a name="ResetTargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resetTargetIdentifier"></a>

```go
func ResetTargetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList">NetworkflowmonitorScopeTargetTargetIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifierInput">TargetIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifier"></a>

```go
func TargetIdentifier() NetworkflowmonitorScopeTargetTargetIdentifierList
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList">NetworkflowmonitorScopeTargetTargetIdentifierList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TargetIdentifierInput`<sup>Optional</sup> <a name="TargetIdentifierInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifierInput"></a>

```go
func TargetIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetTargetIdentifierList <a name="NetworkflowmonitorScopeTargetTargetIdentifierList" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetTargetIdentifierList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorScopeTargetTargetIdentifierList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorScopeTargetTargetIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetTargetIdentifierOutputReference <a name="NetworkflowmonitorScopeTargetTargetIdentifierOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetTargetIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorScopeTargetTargetIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId">PutTargetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetId` <a name="PutTargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId"></a>

```go
func PutTargetId(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTargetId` <a name="ResetTargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resetTargetId"></a>

```go
func ResetTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetId">TargetId</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList">NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetId"></a>

```go
func TargetId() NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList">NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList</a>

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetIdInput"></a>

```go
func TargetIdInput() interface{}
```

- *Type:* interface{}

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetTargetIdentifierTargetIdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorScopeTimeoutsOutputReference <a name="NetworkflowmonitorScopeTimeoutsOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkflowmonitorscope"

networkflowmonitorscope.NewNetworkflowmonitorScopeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkflowmonitorScopeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



