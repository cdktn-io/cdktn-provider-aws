# `agentregistryRegistry` Submodule <a name="`agentregistryRegistry` Submodule" id="@cdktn/provider-aws.agentregistryRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentregistryRegistry <a name="AgentregistryRegistry" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry aws_agentregistry_registry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistry(scope Construct, id *string, config AgentregistryRegistryConfig) AgentregistryRegistry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig">AgentregistryRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig">AgentregistryRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putApprovalConfiguration">PutApprovalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putAutoDetectionConfiguration">PutAutoDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putDiscoveryConfiguration">PutDiscoveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetApprovalConfiguration">ResetApprovalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetAutoDetectionConfiguration">ResetAutoDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetDiscoveryConfiguration">ResetDiscoveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalConfiguration` <a name="PutApprovalConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putApprovalConfiguration"></a>

```go
func PutApprovalConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putApprovalConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAutoDetectionConfiguration` <a name="PutAutoDetectionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putAutoDetectionConfiguration"></a>

```go
func PutAutoDetectionConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putAutoDetectionConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDiscoveryConfiguration` <a name="PutDiscoveryConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putDiscoveryConfiguration"></a>

```go
func PutDiscoveryConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putDiscoveryConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putEncryptionConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putTimeouts"></a>

```go
func PutTimeouts(value AgentregistryRegistryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts">AgentregistryRegistryTimeouts</a>

---

##### `ResetApprovalConfiguration` <a name="ResetApprovalConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetApprovalConfiguration"></a>

```go
func ResetApprovalConfiguration()
```

##### `ResetAutoDetectionConfiguration` <a name="ResetAutoDetectionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetAutoDetectionConfiguration"></a>

```go
func ResetAutoDetectionConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiscoveryConfiguration` <a name="ResetDiscoveryConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetDiscoveryConfiguration"></a>

```go
func ResetDiscoveryConfiguration()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentregistryRegistry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.AgentregistryRegistry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.AgentregistryRegistry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.AgentregistryRegistry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.AgentregistryRegistry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AgentregistryRegistry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AgentregistryRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AgentregistryRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AgentregistryRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.approvalConfiguration">ApprovalConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList">AgentregistryRegistryApprovalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.autoDetectionConfiguration">AutoDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList">AgentregistryRegistryAutoDetectionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.discoveryConfiguration">DiscoveryConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList">AgentregistryRegistryDiscoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList">AgentregistryRegistryEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.registryArn">RegistryArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.registryId">RegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference">AgentregistryRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.approvalConfigurationInput">ApprovalConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.autoDetectionConfigurationInput">AutoDetectionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.discoveryConfigurationInput">DiscoveryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalConfiguration`<sup>Required</sup> <a name="ApprovalConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.approvalConfiguration"></a>

```go
func ApprovalConfiguration() AgentregistryRegistryApprovalConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList">AgentregistryRegistryApprovalConfigurationList</a>

---

##### `AutoDetectionConfiguration`<sup>Required</sup> <a name="AutoDetectionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.autoDetectionConfiguration"></a>

```go
func AutoDetectionConfiguration() AgentregistryRegistryAutoDetectionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList">AgentregistryRegistryAutoDetectionConfigurationList</a>

---

##### `DiscoveryConfiguration`<sup>Required</sup> <a name="DiscoveryConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.discoveryConfiguration"></a>

```go
func DiscoveryConfiguration() AgentregistryRegistryDiscoveryConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList">AgentregistryRegistryDiscoveryConfigurationList</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() AgentregistryRegistryEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList">AgentregistryRegistryEncryptionConfigurationList</a>

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.registryArn"></a>

```go
func RegistryArn() *string
```

- *Type:* *string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.registryId"></a>

```go
func RegistryId() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.timeouts"></a>

```go
func Timeouts() AgentregistryRegistryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference">AgentregistryRegistryTimeoutsOutputReference</a>

---

##### `ApprovalConfigurationInput`<sup>Optional</sup> <a name="ApprovalConfigurationInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.approvalConfigurationInput"></a>

```go
func ApprovalConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AutoDetectionConfigurationInput`<sup>Optional</sup> <a name="AutoDetectionConfigurationInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.autoDetectionConfigurationInput"></a>

```go
func AutoDetectionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscoveryConfigurationInput`<sup>Optional</sup> <a name="DiscoveryConfigurationInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.discoveryConfigurationInput"></a>

```go
func DiscoveryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentregistryRegistryApprovalConfiguration <a name="AgentregistryRegistryApprovalConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryApprovalConfiguration {
	AutoApprovalRules: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfiguration.property.autoApprovalRules">AutoApprovalRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#auto_approval_rules AgentregistryRegistry#auto_approval_rules}. |

---

##### `AutoApprovalRules`<sup>Optional</sup> <a name="AutoApprovalRules" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfiguration.property.autoApprovalRules"></a>

```go
AutoApprovalRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#auto_approval_rules AgentregistryRegistry#auto_approval_rules}.

---

### AgentregistryRegistryAutoDetectionConfiguration <a name="AgentregistryRegistryAutoDetectionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryAutoDetectionConfiguration {
	Enabled: interface{},
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#enabled AgentregistryRegistry#enabled}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfiguration.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#scope AgentregistryRegistry#scope}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#enabled AgentregistryRegistry#enabled}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfiguration.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#scope AgentregistryRegistry#scope}.

---

### AgentregistryRegistryConfig <a name="AgentregistryRegistryConfig" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ApprovalConfiguration: interface{},
	AutoDetectionConfiguration: interface{},
	Description: *string,
	DiscoveryConfiguration: interface{},
	EncryptionConfiguration: interface{},
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.agentregistryRegistry.AgentregistryRegistryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#name AgentregistryRegistry#name}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.approvalConfiguration">ApprovalConfiguration</a></code> | <code>interface{}</code> | approval_configuration block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.autoDetectionConfiguration">AutoDetectionConfiguration</a></code> | <code>interface{}</code> | auto_detection_configuration block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#description AgentregistryRegistry#description}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.discoveryConfiguration">DiscoveryConfiguration</a></code> | <code>interface{}</code> | discovery_configuration block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>interface{}</code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#tags AgentregistryRegistry#tags}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts">AgentregistryRegistryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#name AgentregistryRegistry#name}.

---

##### `ApprovalConfiguration`<sup>Optional</sup> <a name="ApprovalConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.approvalConfiguration"></a>

```go
ApprovalConfiguration interface{}
```

- *Type:* interface{}

approval_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#approval_configuration AgentregistryRegistry#approval_configuration}

---

##### `AutoDetectionConfiguration`<sup>Optional</sup> <a name="AutoDetectionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.autoDetectionConfiguration"></a>

```go
AutoDetectionConfiguration interface{}
```

- *Type:* interface{}

auto_detection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#auto_detection_configuration AgentregistryRegistry#auto_detection_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#description AgentregistryRegistry#description}.

---

##### `DiscoveryConfiguration`<sup>Optional</sup> <a name="DiscoveryConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.discoveryConfiguration"></a>

```go
DiscoveryConfiguration interface{}
```

- *Type:* interface{}

discovery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#discovery_configuration AgentregistryRegistry#discovery_configuration}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration interface{}
```

- *Type:* interface{}

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#encryption_configuration AgentregistryRegistry#encryption_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#region AgentregistryRegistry#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#tags AgentregistryRegistry#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryConfig.property.timeouts"></a>

```go
Timeouts AgentregistryRegistryTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts">AgentregistryRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#timeouts AgentregistryRegistry#timeouts}

---

### AgentregistryRegistryDiscoveryConfiguration <a name="AgentregistryRegistryDiscoveryConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfiguration {
	AuthorizerType: *string,
	AuthorizerConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfiguration.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#authorizer_type AgentregistryRegistry#authorizer_type}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfiguration.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code>interface{}</code> | authorizer_configuration block. |

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfiguration.property.authorizerType"></a>

```go
AuthorizerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#authorizer_type AgentregistryRegistry#authorizer_type}.

---

##### `AuthorizerConfiguration`<sup>Optional</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfiguration.property.authorizerConfiguration"></a>

```go
AuthorizerConfiguration interface{}
```

- *Type:* interface{}

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#authorizer_configuration AgentregistryRegistry#authorizer_configuration}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration {
	CustomJwtAuthorizer: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code>interface{}</code> | custom_jwt_authorizer block. |

---

##### `CustomJwtAuthorizer`<sup>Optional</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```go
CustomJwtAuthorizer interface{}
```

- *Type:* interface{}

custom_jwt_authorizer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#custom_jwt_authorizer AgentregistryRegistry#custom_jwt_authorizer}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer {
	DiscoveryUrl: *string,
	AllowedAudience: *[]*string,
	AllowedClients: *[]*string,
	AllowedScopes: *[]*string,
	CustomClaim: interface{},
	PrivateEndpoint: interface{},
	PrivateEndpointOverride: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#discovery_url AgentregistryRegistry#discovery_url}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#allowed_audience AgentregistryRegistry#allowed_audience}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#allowed_clients AgentregistryRegistry#allowed_clients}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#allowed_scopes AgentregistryRegistry#allowed_scopes}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.customClaim">CustomClaim</a></code> | <code>interface{}</code> | custom_claim block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint">PrivateEndpoint</a></code> | <code>interface{}</code> | private_endpoint block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverride">PrivateEndpointOverride</a></code> | <code>interface{}</code> | private_endpoint_override block. |

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```go
DiscoveryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#discovery_url AgentregistryRegistry#discovery_url}.

---

##### `AllowedAudience`<sup>Optional</sup> <a name="AllowedAudience" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```go
AllowedAudience *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#allowed_audience AgentregistryRegistry#allowed_audience}.

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```go
AllowedClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#allowed_clients AgentregistryRegistry#allowed_clients}.

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```go
AllowedScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#allowed_scopes AgentregistryRegistry#allowed_scopes}.

---

##### `CustomClaim`<sup>Optional</sup> <a name="CustomClaim" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.customClaim"></a>

```go
CustomClaim interface{}
```

- *Type:* interface{}

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#custom_claim AgentregistryRegistry#custom_claim}

---

##### `PrivateEndpoint`<sup>Optional</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint"></a>

```go
PrivateEndpoint interface{}
```

- *Type:* interface{}

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#private_endpoint AgentregistryRegistry#private_endpoint}

---

##### `PrivateEndpointOverride`<sup>Optional</sup> <a name="PrivateEndpointOverride" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverride"></a>

```go
PrivateEndpointOverride interface{}
```

- *Type:* interface{}

private_endpoint_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#private_endpoint_override AgentregistryRegistry#private_endpoint_override}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim {
	InboundTokenClaimName: *string,
	InboundTokenClaimValueType: *string,
	AuthorizingClaimMatchValue: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#inbound_token_claim_name AgentregistryRegistry#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#inbound_token_claim_value_type AgentregistryRegistry#inbound_token_claim_value_type}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code>interface{}</code> | authorizing_claim_match_value block. |

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimName"></a>

```go
InboundTokenClaimName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#inbound_token_claim_name AgentregistryRegistry#inbound_token_claim_name}.

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimValueType"></a>

```go
InboundTokenClaimValueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#inbound_token_claim_value_type AgentregistryRegistry#inbound_token_claim_value_type}.

---

##### `AuthorizingClaimMatchValue`<sup>Optional</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.authorizingClaimMatchValue"></a>

```go
AuthorizingClaimMatchValue interface{}
```

- *Type:* interface{}

authorizing_claim_match_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#authorizing_claim_match_value AgentregistryRegistry#authorizing_claim_match_value}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue {
	ClaimMatchOperator: *string,
	ClaimMatchValue: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#claim_match_operator AgentregistryRegistry#claim_match_operator}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchValue">ClaimMatchValue</a></code> | <code>interface{}</code> | claim_match_value block. |

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```go
ClaimMatchOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#claim_match_operator AgentregistryRegistry#claim_match_operator}.

---

##### `ClaimMatchValue`<sup>Optional</sup> <a name="ClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```go
ClaimMatchValue interface{}
```

- *Type:* interface{}

claim_match_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#claim_match_value AgentregistryRegistry#claim_match_value}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue {
	MatchValueString: *string,
	MatchValueStringList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#match_value_string AgentregistryRegistry#match_value_string}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#match_value_string_list AgentregistryRegistry#match_value_string_list}. |

---

##### `MatchValueString`<sup>Optional</sup> <a name="MatchValueString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```go
MatchValueString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#match_value_string AgentregistryRegistry#match_value_string}.

---

##### `MatchValueStringList`<sup>Optional</sup> <a name="MatchValueStringList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```go
MatchValueStringList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#match_value_string_list AgentregistryRegistry#match_value_string_list}.

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint {
	ManagedVpcResource: interface{},
	SelfManagedLatticeResource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource">ManagedVpcResource</a></code> | <code>interface{}</code> | managed_vpc_resource block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code>interface{}</code> | self_managed_lattice_resource block. |

---

##### `ManagedVpcResource`<sup>Optional</sup> <a name="ManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource"></a>

```go
ManagedVpcResource interface{}
```

- *Type:* interface{}

managed_vpc_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#managed_vpc_resource AgentregistryRegistry#managed_vpc_resource}

---

##### `SelfManagedLatticeResource`<sup>Optional</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource"></a>

```go
SelfManagedLatticeResource interface{}
```

- *Type:* interface{}

self_managed_lattice_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#self_managed_lattice_resource AgentregistryRegistry#self_managed_lattice_resource}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource {
	EndpointIpAddressType: *string,
	SubnetIds: *[]*string,
	VpcIdentifier: *string,
	RoutingDomain: *string,
	SecurityGroupIds: *[]*string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#endpoint_ip_address_type AgentregistryRegistry#endpoint_ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#subnet_ids AgentregistryRegistry#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier">VpcIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#vpc_identifier AgentregistryRegistry#vpc_identifier}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain">RoutingDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#routing_domain AgentregistryRegistry#routing_domain}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#security_group_ids AgentregistryRegistry#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#tags AgentregistryRegistry#tags}. |

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```go
EndpointIpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#endpoint_ip_address_type AgentregistryRegistry#endpoint_ip_address_type}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#subnet_ids AgentregistryRegistry#subnet_ids}.

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```go
VpcIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#vpc_identifier AgentregistryRegistry#vpc_identifier}.

---

##### `RoutingDomain`<sup>Optional</sup> <a name="RoutingDomain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain"></a>

```go
RoutingDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#routing_domain AgentregistryRegistry#routing_domain}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#security_group_ids AgentregistryRegistry#security_group_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#tags AgentregistryRegistry#tags}.

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride {
	Domain: *string,
	PrivateEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#domain AgentregistryRegistry#domain}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.property.privateEndpoint">PrivateEndpoint</a></code> | <code>interface{}</code> | private_endpoint block. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#domain AgentregistryRegistry#domain}.

---

##### `PrivateEndpoint`<sup>Optional</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.property.privateEndpoint"></a>

```go
PrivateEndpoint interface{}
```

- *Type:* interface{}

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#private_endpoint AgentregistryRegistry#private_endpoint}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint {
	ManagedVpcResource: interface{},
	SelfManagedLatticeResource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.property.managedVpcResource">ManagedVpcResource</a></code> | <code>interface{}</code> | managed_vpc_resource block. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code>interface{}</code> | self_managed_lattice_resource block. |

---

##### `ManagedVpcResource`<sup>Optional</sup> <a name="ManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.property.managedVpcResource"></a>

```go
ManagedVpcResource interface{}
```

- *Type:* interface{}

managed_vpc_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#managed_vpc_resource AgentregistryRegistry#managed_vpc_resource}

---

##### `SelfManagedLatticeResource`<sup>Optional</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.property.selfManagedLatticeResource"></a>

```go
SelfManagedLatticeResource interface{}
```

- *Type:* interface{}

self_managed_lattice_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#self_managed_lattice_resource AgentregistryRegistry#self_managed_lattice_resource}

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource {
	EndpointIpAddressType: *string,
	SubnetIds: *[]*string,
	VpcIdentifier: *string,
	RoutingDomain: *string,
	SecurityGroupIds: *[]*string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#endpoint_ip_address_type AgentregistryRegistry#endpoint_ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#subnet_ids AgentregistryRegistry#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.vpcIdentifier">VpcIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#vpc_identifier AgentregistryRegistry#vpc_identifier}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.routingDomain">RoutingDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#routing_domain AgentregistryRegistry#routing_domain}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#security_group_ids AgentregistryRegistry#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#tags AgentregistryRegistry#tags}. |

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```go
EndpointIpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#endpoint_ip_address_type AgentregistryRegistry#endpoint_ip_address_type}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#subnet_ids AgentregistryRegistry#subnet_ids}.

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```go
VpcIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#vpc_identifier AgentregistryRegistry#vpc_identifier}.

---

##### `RoutingDomain`<sup>Optional</sup> <a name="RoutingDomain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.routingDomain"></a>

```go
RoutingDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#routing_domain AgentregistryRegistry#routing_domain}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#security_group_ids AgentregistryRegistry#security_group_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#tags AgentregistryRegistry#tags}.

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource {
	ResourceConfigurationIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#resource_configuration_identifier AgentregistryRegistry#resource_configuration_identifier}. |

---

##### `ResourceConfigurationIdentifier`<sup>Optional</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```go
ResourceConfigurationIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#resource_configuration_identifier AgentregistryRegistry#resource_configuration_identifier}.

---

### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource {
	ResourceConfigurationIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#resource_configuration_identifier AgentregistryRegistry#resource_configuration_identifier}. |

---

##### `ResourceConfigurationIdentifier`<sup>Optional</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```go
ResourceConfigurationIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#resource_configuration_identifier AgentregistryRegistry#resource_configuration_identifier}.

---

### AgentregistryRegistryEncryptionConfiguration <a name="AgentregistryRegistryEncryptionConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryEncryptionConfiguration {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#kms_key_arn AgentregistryRegistry#kms_key_arn}. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#kms_key_arn AgentregistryRegistry#kms_key_arn}.

---

### AgentregistryRegistryTimeouts <a name="AgentregistryRegistryTimeouts" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

&agentregistryregistry.AgentregistryRegistryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#create AgentregistryRegistry#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#delete AgentregistryRegistry#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/agentregistry_registry#update AgentregistryRegistry#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AgentregistryRegistryApprovalConfigurationList <a name="AgentregistryRegistryApprovalConfigurationList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryApprovalConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryApprovalConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryApprovalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryApprovalConfigurationOutputReference <a name="AgentregistryRegistryApprovalConfigurationOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryApprovalConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryApprovalConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.resetAutoApprovalRules">ResetAutoApprovalRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoApprovalRules` <a name="ResetAutoApprovalRules" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.resetAutoApprovalRules"></a>

```go
func ResetAutoApprovalRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRulesInput">AutoApprovalRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRules">AutoApprovalRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoApprovalRulesInput`<sup>Optional</sup> <a name="AutoApprovalRulesInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRulesInput"></a>

```go
func AutoApprovalRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoApprovalRules`<sup>Required</sup> <a name="AutoApprovalRules" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRules"></a>

```go
func AutoApprovalRules() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryApprovalConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryAutoDetectionConfigurationList <a name="AgentregistryRegistryAutoDetectionConfigurationList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryAutoDetectionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryAutoDetectionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryAutoDetectionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryAutoDetectionConfigurationOutputReference <a name="AgentregistryRegistryAutoDetectionConfigurationOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryAutoDetectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryAutoDetectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryAutoDetectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">ResetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">ResetMatchValueStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValueString` <a name="ResetMatchValueString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```go
func ResetMatchValueString()
```

##### `ResetMatchValueStringList` <a name="ResetMatchValueStringList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```go
func ResetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">MatchValueStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">MatchValueStringListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValueStringInput`<sup>Optional</sup> <a name="MatchValueStringInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```go
func MatchValueStringInput() *string
```

- *Type:* *string

---

##### `MatchValueStringListInput`<sup>Optional</sup> <a name="MatchValueStringListInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```go
func MatchValueStringListInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```go
func MatchValueString() *string
```

- *Type:* *string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```go
func MatchValueStringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">PutClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">ResetClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaimMatchValue` <a name="PutClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```go
func PutClaimMatchValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClaimMatchValue` <a name="ResetClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```go
func ResetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">ClaimMatchOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">ClaimMatchValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```go
func ClaimMatchValue() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a>

---

##### `ClaimMatchOperatorInput`<sup>Optional</sup> <a name="ClaimMatchOperatorInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```go
func ClaimMatchOperatorInput() *string
```

- *Type:* *string

---

##### `ClaimMatchValueInput`<sup>Optional</sup> <a name="ClaimMatchValueInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```go
func ClaimMatchValueInput() interface{}
```

- *Type:* interface{}

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```go
func ClaimMatchOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue">PutAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resetAuthorizingClaimMatchValue">ResetAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizingClaimMatchValue` <a name="PutAuthorizingClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue"></a>

```go
func PutAuthorizingClaimMatchValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizingClaimMatchValue` <a name="ResetAuthorizingClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resetAuthorizingClaimMatchValue"></a>

```go
func ResetAuthorizingClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValueInput">AuthorizingClaimMatchValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimNameInput">InboundTokenClaimNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueTypeInput">InboundTokenClaimValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue"></a>

```go
func AuthorizingClaimMatchValue() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a>

---

##### `AuthorizingClaimMatchValueInput`<sup>Optional</sup> <a name="AuthorizingClaimMatchValueInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValueInput"></a>

```go
func AuthorizingClaimMatchValueInput() interface{}
```

- *Type:* interface{}

---

##### `InboundTokenClaimNameInput`<sup>Optional</sup> <a name="InboundTokenClaimNameInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimNameInput"></a>

```go
func InboundTokenClaimNameInput() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="InboundTokenClaimValueTypeInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```go
func InboundTokenClaimValueTypeInput() *string
```

- *Type:* *string

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName"></a>

```go
func InboundTokenClaimName() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType"></a>

```go
func InboundTokenClaimValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim">PutCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint">PutPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverride">PutPrivateEndpointOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">ResetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">ResetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaim">ResetCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint">ResetPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverride">ResetPrivateEndpointOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomClaim` <a name="PutCustomClaim" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim"></a>

```go
func PutCustomClaim(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrivateEndpoint` <a name="PutPrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint"></a>

```go
func PutPrivateEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrivateEndpointOverride` <a name="PutPrivateEndpointOverride" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverride"></a>

```go
func PutPrivateEndpointOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedAudience` <a name="ResetAllowedAudience" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```go
func ResetAllowedAudience()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```go
func ResetAllowedClients()
```

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```go
func ResetAllowedScopes()
```

##### `ResetCustomClaim` <a name="ResetCustomClaim" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaim"></a>

```go
func ResetCustomClaim()
```

##### `ResetPrivateEndpoint` <a name="ResetPrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint"></a>

```go
func ResetPrivateEndpoint()
```

##### `ResetPrivateEndpointOverride` <a name="ResetPrivateEndpointOverride" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverride"></a>

```go
func ResetPrivateEndpointOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim">CustomClaim</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverride">PrivateEndpointOverride</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">AllowedAudienceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimInput">CustomClaimInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput">PrivateEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrideInput">PrivateEndpointOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomClaim`<sup>Required</sup> <a name="CustomClaim" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim"></a>

```go
func CustomClaim() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a>

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a>

---

##### `PrivateEndpointOverride`<sup>Required</sup> <a name="PrivateEndpointOverride" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverride"></a>

```go
func PrivateEndpointOverride() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList</a>

---

##### `AllowedAudienceInput`<sup>Optional</sup> <a name="AllowedAudienceInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```go
func AllowedAudienceInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```go
func AllowedClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```go
func AllowedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomClaimInput`<sup>Optional</sup> <a name="CustomClaimInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimInput"></a>

```go
func CustomClaimInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```go
func DiscoveryUrlInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointInput`<sup>Optional</sup> <a name="PrivateEndpointInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput"></a>

```go
func PrivateEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateEndpointOverrideInput`<sup>Optional</sup> <a name="PrivateEndpointOverrideInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrideInput"></a>

```go
func PrivateEndpointOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```go
func AllowedAudience() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```go
func AllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">ResetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoutingDomain` <a name="ResetRoutingDomain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```go
func ResetRoutingDomain()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">EndpointIpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">RoutingDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">VpcIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">RoutingDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">VpcIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointIpAddressTypeInput`<sup>Optional</sup> <a name="EndpointIpAddressTypeInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```go
func EndpointIpAddressTypeInput() *string
```

- *Type:* *string

---

##### `RoutingDomainInput`<sup>Optional</sup> <a name="RoutingDomainInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```go
func RoutingDomainInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdentifierInput`<sup>Optional</sup> <a name="VpcIdentifierInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```go
func VpcIdentifierInput() *string
```

- *Type:* *string

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```go
func EndpointIpAddressType() *string
```

- *Type:* *string

---

##### `RoutingDomain`<sup>Required</sup> <a name="RoutingDomain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```go
func RoutingDomain() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```go
func VpcIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource">PutManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource">PutSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource">ResetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource">ResetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedVpcResource` <a name="PutManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource"></a>

```go
func PutManagedVpcResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSelfManagedLatticeResource` <a name="PutSelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```go
func PutSelfManagedLatticeResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetManagedVpcResource` <a name="ResetManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource"></a>

```go
func ResetManagedVpcResource()
```

##### `ResetSelfManagedLatticeResource` <a name="ResetSelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```go
func ResetSelfManagedLatticeResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput">ManagedVpcResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">SelfManagedLatticeResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedVpcResource`<sup>Required</sup> <a name="ManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource"></a>

```go
func ManagedVpcResource() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a>

---

##### `SelfManagedLatticeResource`<sup>Required</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```go
func SelfManagedLatticeResource() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `ManagedVpcResourceInput`<sup>Optional</sup> <a name="ManagedVpcResourceInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```go
func ManagedVpcResourceInput() interface{}
```

- *Type:* interface{}

---

##### `SelfManagedLatticeResourceInput`<sup>Optional</sup> <a name="SelfManagedLatticeResourceInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```go
func SelfManagedLatticeResourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.putPrivateEndpoint">PutPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resetPrivateEndpoint">ResetPrivateEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateEndpoint` <a name="PutPrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.putPrivateEndpoint"></a>

```go
func PutPrivateEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrivateEndpoint` <a name="ResetPrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resetPrivateEndpoint"></a>

```go
func ResetPrivateEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpointInput">PrivateEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointInput`<sup>Optional</sup> <a name="PrivateEndpointInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpointInput"></a>

```go
func PrivateEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">ResetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoutingDomain` <a name="ResetRoutingDomain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```go
func ResetRoutingDomain()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">EndpointIpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">RoutingDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">VpcIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">RoutingDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">VpcIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointIpAddressTypeInput`<sup>Optional</sup> <a name="EndpointIpAddressTypeInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```go
func EndpointIpAddressTypeInput() *string
```

- *Type:* *string

---

##### `RoutingDomainInput`<sup>Optional</sup> <a name="RoutingDomainInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```go
func RoutingDomainInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdentifierInput`<sup>Optional</sup> <a name="VpcIdentifierInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```go
func VpcIdentifierInput() *string
```

- *Type:* *string

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```go
func EndpointIpAddressType() *string
```

- *Type:* *string

---

##### `RoutingDomain`<sup>Required</sup> <a name="RoutingDomain" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```go
func RoutingDomain() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```go
func VpcIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.putManagedVpcResource">PutManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.putSelfManagedLatticeResource">PutSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resetManagedVpcResource">ResetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resetSelfManagedLatticeResource">ResetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedVpcResource` <a name="PutManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.putManagedVpcResource"></a>

```go
func PutManagedVpcResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSelfManagedLatticeResource` <a name="PutSelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```go
func PutSelfManagedLatticeResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetManagedVpcResource` <a name="ResetManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resetManagedVpcResource"></a>

```go
func ResetManagedVpcResource()
```

##### `ResetSelfManagedLatticeResource` <a name="ResetSelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```go
func ResetSelfManagedLatticeResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResourceInput">ManagedVpcResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">SelfManagedLatticeResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedVpcResource`<sup>Required</sup> <a name="ManagedVpcResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResource"></a>

```go
func ManagedVpcResource() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList</a>

---

##### `SelfManagedLatticeResource`<sup>Required</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```go
func SelfManagedLatticeResource() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `ManagedVpcResourceInput`<sup>Optional</sup> <a name="ManagedVpcResourceInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```go
func ManagedVpcResourceInput() interface{}
```

- *Type:* interface{}

---

##### `SelfManagedLatticeResourceInput`<sup>Optional</sup> <a name="SelfManagedLatticeResourceInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```go
func SelfManagedLatticeResourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier">ResetResourceConfigurationIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationIdentifier` <a name="ResetResourceConfigurationIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier"></a>

```go
func ResetResourceConfigurationIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">ResourceConfigurationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="ResourceConfigurationIdentifierInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```go
func ResourceConfigurationIdentifierInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```go
func ResourceConfigurationIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier">ResetResourceConfigurationIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationIdentifier` <a name="ResetResourceConfigurationIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resetResourceConfigurationIdentifier"></a>

```go
func ResetResourceConfigurationIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">ResourceConfigurationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="ResourceConfigurationIdentifierInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```go
func ResourceConfigurationIdentifierInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```go
func ResourceConfigurationIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">PutCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">ResetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomJwtAuthorizer` <a name="PutCustomJwtAuthorizer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```go
func PutCustomJwtAuthorizer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomJwtAuthorizer` <a name="ResetCustomJwtAuthorizer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```go
func ResetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">CustomJwtAuthorizerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```go
func CustomJwtAuthorizer() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `CustomJwtAuthorizerInput`<sup>Optional</sup> <a name="CustomJwtAuthorizerInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```go
func CustomJwtAuthorizerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationList <a name="AgentregistryRegistryDiscoveryConfigurationList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryDiscoveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryDiscoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryDiscoveryConfigurationOutputReference <a name="AgentregistryRegistryDiscoveryConfigurationOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryDiscoveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryDiscoveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.putAuthorizerConfiguration">PutAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.resetAuthorizerConfiguration">ResetAuthorizerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerConfiguration` <a name="PutAuthorizerConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.putAuthorizerConfiguration"></a>

```go
func PutAuthorizerConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizerConfiguration` <a name="ResetAuthorizerConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.resetAuthorizerConfiguration"></a>

```go
func ResetAuthorizerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfigurationInput">AuthorizerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerTypeInput">AuthorizerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfiguration"></a>

```go
func AuthorizerConfiguration() AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList">AgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList</a>

---

##### `AuthorizerConfigurationInput`<sup>Optional</sup> <a name="AuthorizerConfigurationInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfigurationInput"></a>

```go
func AuthorizerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizerTypeInput`<sup>Optional</sup> <a name="AuthorizerTypeInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerTypeInput"></a>

```go
func AuthorizerTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerType"></a>

```go
func AuthorizerType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryDiscoveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryEncryptionConfigurationList <a name="AgentregistryRegistryEncryptionConfigurationList" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AgentregistryRegistryEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) AgentregistryRegistryEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryEncryptionConfigurationOutputReference <a name="AgentregistryRegistryEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AgentregistryRegistryEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AgentregistryRegistryTimeoutsOutputReference <a name="AgentregistryRegistryTimeoutsOutputReference" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/agentregistryregistry"

agentregistryregistry.NewAgentregistryRegistryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentregistryRegistryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.agentregistryRegistry.AgentregistryRegistryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



