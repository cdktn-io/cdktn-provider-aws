# `networksecuritymanagerScope` Submodule <a name="`networksecuritymanagerScope` Submodule" id="@cdktn/provider-aws.networksecuritymanagerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerScope <a name="NetworksecuritymanagerScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope aws_networksecuritymanager_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScope(scope Construct, id *string, config NetworksecuritymanagerScopeConfig) NetworksecuritymanagerScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration">PutScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetIsPublished">ResetIsPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration">ResetScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScopeConfiguration` <a name="PutScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration"></a>

```go
func PutScopeConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIsPublished` <a name="ResetIsPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetIsPublished"></a>

```go
func ResetIsPublished()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScopeConfiguration` <a name="ResetScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration"></a>

```go
func ResetScopeConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NetworksecuritymanagerScope_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworksecuritymanagerScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworksecuritymanagerScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList">NetworksecuritymanagerScopeScopeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublishedInput">IsPublishedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput">ScopeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublished">IsPublished</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ScopeConfiguration`<sup>Required</sup> <a name="ScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration"></a>

```go
func ScopeConfiguration() NetworksecuritymanagerScopeScopeConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList">NetworksecuritymanagerScopeScopeConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IsPublishedInput`<sup>Optional</sup> <a name="IsPublishedInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublishedInput"></a>

```go
func IsPublishedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScopeConfigurationInput`<sup>Optional</sup> <a name="ScopeConfigurationInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput"></a>

```go
func ScopeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsPublished`<sup>Required</sup> <a name="IsPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublished"></a>

```go
func IsPublished() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerScopeConfig <a name="NetworksecuritymanagerScopeConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	IsPublished: interface{},
	Region: *string,
	ScopeConfiguration: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#name NetworksecuritymanagerScope#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#description NetworksecuritymanagerScope#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.isPublished">IsPublished</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#is_published NetworksecuritymanagerScope#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration">ScopeConfiguration</a></code> | <code>interface{}</code> | scope_configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#name NetworksecuritymanagerScope#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#description NetworksecuritymanagerScope#description}.

---

##### `IsPublished`<sup>Optional</sup> <a name="IsPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.isPublished"></a>

```go
IsPublished interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#is_published NetworksecuritymanagerScope#is_published}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#region NetworksecuritymanagerScope#region}

---

##### `ScopeConfiguration`<sup>Optional</sup> <a name="ScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration"></a>

```go
ScopeConfiguration interface{}
```

- *Type:* interface{}

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scope_configuration NetworksecuritymanagerScope#scope_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfiguration <a name="NetworksecuritymanagerScopeScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfiguration {
	AccountFilter: interface{},
	ResourceScope: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.accountFilter">AccountFilter</a></code> | <code>interface{}</code> | account_filter block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.resourceScope">ResourceScope</a></code> | <code>interface{}</code> | resource_scope block. |

---

##### `AccountFilter`<sup>Optional</sup> <a name="AccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.accountFilter"></a>

```go
AccountFilter interface{}
```

- *Type:* interface{}

account_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_filter NetworksecuritymanagerScope#account_filter}

---

##### `ResourceScope`<sup>Optional</sup> <a name="ResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.resourceScope"></a>

```go
ResourceScope interface{}
```

- *Type:* interface{}

resource_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_scope NetworksecuritymanagerScope#resource_scope}

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilter <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter {
	Exclude: interface{},
	Include: interface{},
	IncludeAll: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.exclude">Exclude</a></code> | <code>interface{}</code> | exclude block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.include">Include</a></code> | <code>interface{}</code> | include block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.exclude"></a>

```go
Exclude interface{}
```

- *Type:* interface{}

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.include"></a>

```go
Include interface{}
```

- *Type:* interface{}

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.includeAll"></a>

```go
IncludeAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}.

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude {
	AccountIds: *[]*string,
	OrganizationalUnits: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.organizationalUnits"></a>

```go
OrganizationalUnits *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}.

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude {
	AccountIds: *[]*string,
	OrganizationalUnits: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}.

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.organizationalUnits"></a>

```go
OrganizationalUnits *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScope <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScope {
	ResourceType: *string,
	Exclude: interface{},
	Include: interface{},
	IncludeAll: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_type NetworksecuritymanagerScope#resource_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.exclude">Exclude</a></code> | <code>interface{}</code> | exclude block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.include">Include</a></code> | <code>interface{}</code> | include block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_type NetworksecuritymanagerScope#resource_type}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.exclude"></a>

```go
Exclude interface{}
```

- *Type:* interface{}

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.include"></a>

```go
Include interface{}
```

- *Type:* interface{}

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.includeAll"></a>

```go
IncludeAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude {
	ExplicitArns: *[]*string,
	Expression: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.explicitArns">ExplicitArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.expression">Expression</a></code> | <code>interface{}</code> | expression block. |

---

##### `ExplicitArns`<sup>Optional</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.explicitArns"></a>

```go
ExplicitArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.expression"></a>

```go
Expression interface{}
```

- *Type:* interface{}

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression {
	And: interface{},
	Criteria: interface{},
	Not: interface{},
	Or: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.and">And</a></code> | <code>interface{}</code> | and block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.criteria">Criteria</a></code> | <code>interface{}</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.not">Not</a></code> | <code>interface{}</code> | not block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.or">Or</a></code> | <code>interface{}</code> | or block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.criteria"></a>

```go
Criteria interface{}
```

- *Type:* interface{}

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.not"></a>

```go
Not interface{}
```

- *Type:* interface{}

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.or"></a>

```go
Or interface{}
```

- *Type:* interface{}

or block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude {
	ExplicitArns: *[]*string,
	Expression: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.explicitArns">ExplicitArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.expression">Expression</a></code> | <code>interface{}</code> | expression block. |

---

##### `ExplicitArns`<sup>Optional</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.explicitArns"></a>

```go
ExplicitArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.expression"></a>

```go
Expression interface{}
```

- *Type:* interface{}

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression {
	And: interface{},
	Criteria: interface{},
	Not: interface{},
	Or: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.and">And</a></code> | <code>interface{}</code> | and block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.criteria">Criteria</a></code> | <code>interface{}</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.not">Not</a></code> | <code>interface{}</code> | not block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.or">Or</a></code> | <code>interface{}</code> | or block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.criteria"></a>

```go
Criteria interface{}
```

- *Type:* interface{}

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.not"></a>

```go
Not interface{}
```

- *Type:* interface{}

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.or"></a>

```go
Or interface{}
```

- *Type:* interface{}

or block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr {
	AlbConfig: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.albConfig">AlbConfig</a></code> | <code>interface{}</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `AlbConfig`<sup>Optional</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.albConfig"></a>

```go
AlbConfig interface{}
```

- *Type:* interface{}

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

&networksecuritymanagerscope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig {
	IpAddressType: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetOrganizationalUnits"></a>

```go
func ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnitsInput"></a>

```go
func OrganizationalUnitsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnits"></a>

```go
func OrganizationalUnits() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetOrganizationalUnits"></a>

```go
func ResetOrganizationalUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnitsInput"></a>

```go
func OrganizationalUnitsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnits"></a>

```go
func OrganizationalUnits() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationAccountFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationAccountFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclude` <a name="PutExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude"></a>

```go
func PutExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInclude` <a name="PutInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude"></a>

```go
func PutInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetInclude"></a>

```go
func ResetInclude()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetIncludeAll"></a>

```go
func ResetIncludeAll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.include">Include</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeInput">IncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.exclude"></a>

```go
func Exclude() NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.include"></a>

```go
func Include() NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList</a>

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAllInput"></a>

```go
func IncludeAllInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeInput"></a>

```go
func IncludeInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAll"></a>

```go
func IncludeAll() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationList <a name="NetworksecuritymanagerScopeScopeConfigurationList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter">PutAccountFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope">PutResourceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetAccountFilter">ResetAccountFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetResourceScope">ResetResourceScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccountFilter` <a name="PutAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter"></a>

```go
func PutAccountFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceScope` <a name="PutResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope"></a>

```go
func PutResourceScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountFilter` <a name="ResetAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetAccountFilter"></a>

```go
func ResetAccountFilter()
```

##### `ResetResourceScope` <a name="ResetResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetResourceScope"></a>

```go
func ResetResourceScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilter">AccountFilter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScope">ResourceScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilterInput">AccountFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScopeInput">ResourceScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountFilter`<sup>Required</sup> <a name="AccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilter"></a>

```go
func AccountFilter() NetworksecuritymanagerScopeScopeConfigurationAccountFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterList</a>

---

##### `ResourceScope`<sup>Required</sup> <a name="ResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScope"></a>

```go
func ResourceScope() NetworksecuritymanagerScopeScopeConfigurationResourceScopeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeList</a>

---

##### `AccountFilterInput`<sup>Optional</sup> <a name="AccountFilterInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilterInput"></a>

```go
func AccountFilterInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceScopeInput`<sup>Optional</sup> <a name="ResourceScopeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScopeInput"></a>

```go
func ResourceScopeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetOr">ResetOr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria"></a>

```go
func PutCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNot` <a name="PutNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot"></a>

```go
func PutNot(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOr` <a name="PutOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr"></a>

```go
func PutOr(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetAnd"></a>

```go
func ResetAnd()
```

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetCriteria"></a>

```go
func ResetCriteria()
```

##### `ResetNot` <a name="ResetNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetNot"></a>

```go
func ResetNot()
```

##### `ResetOr` <a name="ResetOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetOr"></a>

```go
func ResetOr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.and">And</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.not">Not</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.or">Or</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.notInput">NotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.orInput">OrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.and"></a>

```go
func And() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteria"></a>

```go
func Criteria() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.not"></a>

```go
func Not() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.or"></a>

```go
func Or() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.notInput"></a>

```go
func NotInput() interface{}
```

- *Type:* interface{}

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.orInput"></a>

```go
func OrInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExplicitArns">ResetExplicitArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression"></a>

```go
func PutExpression(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExplicitArns` <a name="ResetExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExplicitArns"></a>

```go
func ResetExplicitArns()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExpression"></a>

```go
func ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArnsInput">ExplicitArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArns">ExplicitArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expression"></a>

```go
func Expression() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList</a>

---

##### `ExplicitArnsInput`<sup>Optional</sup> <a name="ExplicitArnsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArnsInput"></a>

```go
func ExplicitArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `ExplicitArns`<sup>Required</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArns"></a>

```go
func ExplicitArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig">PutAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetAlbConfig">ResetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlbConfig` <a name="PutAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig"></a>

```go
func PutAlbConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlbConfig` <a name="ResetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetAlbConfig"></a>

```go
func ResetAlbConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfig">AlbConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfigInput">AlbConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlbConfig`<sup>Required</sup> <a name="AlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfig"></a>

```go
func AlbConfig() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList</a>

---

##### `AlbConfigInput`<sup>Optional</sup> <a name="AlbConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfigInput"></a>

```go
func AlbConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetOr">ResetOr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria"></a>

```go
func PutCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNot` <a name="PutNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot"></a>

```go
func PutNot(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOr` <a name="PutOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr"></a>

```go
func PutOr(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetAnd"></a>

```go
func ResetAnd()
```

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetCriteria"></a>

```go
func ResetCriteria()
```

##### `ResetNot` <a name="ResetNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetNot"></a>

```go
func ResetNot()
```

##### `ResetOr` <a name="ResetOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetOr"></a>

```go
func ResetOr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.and">And</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.not">Not</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.or">Or</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.notInput">NotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.orInput">OrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.and"></a>

```go
func And() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteria"></a>

```go
func Criteria() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.not"></a>

```go
func Not() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.or"></a>

```go
func Or() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.notInput"></a>

```go
func NotInput() interface{}
```

- *Type:* interface{}

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.orInput"></a>

```go
func OrInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExplicitArns">ResetExplicitArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression"></a>

```go
func PutExpression(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExplicitArns` <a name="ResetExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExplicitArns"></a>

```go
func ResetExplicitArns()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExpression"></a>

```go
func ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArnsInput">ExplicitArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArns">ExplicitArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expression"></a>

```go
func Expression() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList</a>

---

##### `ExplicitArnsInput`<sup>Optional</sup> <a name="ExplicitArnsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArnsInput"></a>

```go
func ExplicitArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `ExplicitArns`<sup>Required</sup> <a name="ExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArns"></a>

```go
func ExplicitArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/networksecuritymanagerscope"

networksecuritymanagerscope.NewNetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclude` <a name="PutExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude"></a>

```go
func PutExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInclude` <a name="PutInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude"></a>

```go
func PutInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetInclude"></a>

```go
func ResetInclude()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetIncludeAll"></a>

```go
func ResetIncludeAll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.include">Include</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAllInput">IncludeAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeInput">IncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAll">IncludeAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.exclude"></a>

```go
func Exclude() NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.include"></a>

```go
func Include() NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList</a>

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAllInput"></a>

```go
func IncludeAllInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeInput"></a>

```go
func IncludeInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAll"></a>

```go
func IncludeAll() interface{}
```

- *Type:* interface{}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



