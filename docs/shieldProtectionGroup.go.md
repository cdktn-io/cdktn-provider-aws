# `shieldProtectionGroup` Submodule <a name="`shieldProtectionGroup` Submodule" id="@cdktn/provider-aws.shieldProtectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtectionGroup <a name="ShieldProtectionGroup" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group aws_shield_protection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/shieldprotectiongroup"

shieldprotectiongroup.NewShieldProtectionGroup(scope Construct, id *string, config ShieldProtectionGroupConfig) ShieldProtectionGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig">ShieldProtectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig">ShieldProtectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetMembers"></a>

```go
func ResetMembers()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldProtectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/shieldprotectiongroup"

shieldprotectiongroup.ShieldProtectionGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/shieldprotectiongroup"

shieldprotectiongroup.ShieldProtectionGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/shieldprotectiongroup"

shieldprotectiongroup.ShieldProtectionGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/shieldprotectiongroup"

shieldprotectiongroup.ShieldProtectionGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ShieldProtectionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ShieldProtectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ShieldProtectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ShieldProtectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupArn">ProtectionGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupIdInput">ProtectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupId">ProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProtectionGroupArn`<sup>Required</sup> <a name="ProtectionGroupArn" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupArn"></a>

```go
func ProtectionGroupArn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `ProtectionGroupIdInput`<sup>Optional</sup> <a name="ProtectionGroupIdInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupIdInput"></a>

```go
func ProtectionGroupIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `ProtectionGroupId`<sup>Required</sup> <a name="ProtectionGroupId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupId"></a>

```go
func ProtectionGroupId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionGroupConfig <a name="ShieldProtectionGroupConfig" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/shieldprotectiongroup"

&shieldprotectiongroup.ShieldProtectionGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Aggregation: *string,
	Pattern: *string,
	ProtectionGroupId: *string,
	Id: *string,
	Members: *[]*string,
	ResourceType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.aggregation">Aggregation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#aggregation ShieldProtectionGroup#aggregation}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#pattern ShieldProtectionGroup#pattern}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.protectionGroupId">ProtectionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#protection_group_id ShieldProtectionGroup#protection_group_id}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#id ShieldProtectionGroup#id}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#members ShieldProtectionGroup#members}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#resource_type ShieldProtectionGroup#resource_type}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#tags ShieldProtectionGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#tags_all ShieldProtectionGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#aggregation ShieldProtectionGroup#aggregation}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#pattern ShieldProtectionGroup#pattern}.

---

##### `ProtectionGroupId`<sup>Required</sup> <a name="ProtectionGroupId" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.protectionGroupId"></a>

```go
ProtectionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#protection_group_id ShieldProtectionGroup#protection_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#id ShieldProtectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#members ShieldProtectionGroup#members}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#resource_type ShieldProtectionGroup#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#tags ShieldProtectionGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_protection_group#tags_all ShieldProtectionGroup#tags_all}.

---



