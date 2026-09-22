# `dataAwsAgentregistryRegistry` Submodule <a name="`dataAwsAgentregistryRegistry` Submodule" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAgentregistryRegistry <a name="DataAwsAgentregistryRegistry" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry aws_agentregistry_registry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistry(scope Construct, id *string, config DataAwsAgentregistryRegistryConfig) DataAwsAgentregistryRegistry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig">DataAwsAgentregistryRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig">DataAwsAgentregistryRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAgentregistryRegistry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.DataAwsAgentregistryRegistry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.DataAwsAgentregistryRegistry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.DataAwsAgentregistryRegistry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.DataAwsAgentregistryRegistry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsAgentregistryRegistry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsAgentregistryRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsAgentregistryRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAgentregistryRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.approvalConfiguration">ApprovalConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList">DataAwsAgentregistryRegistryApprovalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.discoveryConfiguration">DiscoveryConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList">DataAwsAgentregistryRegistryEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryArn">RegistryArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryIdInput">RegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryId">RegistryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApprovalConfiguration`<sup>Required</sup> <a name="ApprovalConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.approvalConfiguration"></a>

```go
func ApprovalConfiguration() DataAwsAgentregistryRegistryApprovalConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList">DataAwsAgentregistryRegistryApprovalConfigurationList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscoveryConfiguration`<sup>Required</sup> <a name="DiscoveryConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.discoveryConfiguration"></a>

```go
func DiscoveryConfiguration() DataAwsAgentregistryRegistryDiscoveryConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationList</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsAgentregistryRegistryEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList">DataAwsAgentregistryRegistryEncryptionConfigurationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryArn"></a>

```go
func RegistryArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RegistryIdInput`<sup>Optional</sup> <a name="RegistryIdInput" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryIdInput"></a>

```go
func RegistryIdInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.registryId"></a>

```go
func RegistryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAgentregistryRegistryApprovalConfiguration <a name="DataAwsAgentregistryRegistryApprovalConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryApprovalConfiguration {

}
```


### DataAwsAgentregistryRegistryConfig <a name="DataAwsAgentregistryRegistryConfig" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RegistryId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.registryId">RegistryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#registry_id DataAwsAgentregistryRegistry#registry_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.registryId"></a>

```go
RegistryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#registry_id DataAwsAgentregistryRegistry#registry_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/agentregistry_registry#region DataAwsAgentregistryRegistry#region}

---

### DataAwsAgentregistryRegistryDiscoveryConfiguration <a name="DataAwsAgentregistryRegistryDiscoveryConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfiguration {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource {

}
```


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource {

}
```


### DataAwsAgentregistryRegistryEncryptionConfiguration <a name="DataAwsAgentregistryRegistryEncryptionConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

&dataawsagentregistryregistry.DataAwsAgentregistryRegistryEncryptionConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAgentregistryRegistryApprovalConfigurationList <a name="DataAwsAgentregistryRegistryApprovalConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryApprovalConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryApprovalConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryApprovalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryApprovalConfigurationOutputReference <a name="DataAwsAgentregistryRegistryApprovalConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryApprovalConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryApprovalConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRules">AutoApprovalRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration">DataAwsAgentregistryRegistryApprovalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoApprovalRules`<sup>Required</sup> <a name="AutoApprovalRules" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.autoApprovalRules"></a>

```go
func AutoApprovalRules() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryApprovalConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryApprovalConfiguration">DataAwsAgentregistryRegistryApprovalConfiguration</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```go
func MatchValueString() *string
```

- *Type:* *string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```go
func MatchValueStringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```go
func ClaimMatchOperator() *string
```

- *Type:* *string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```go
func ClaimMatchValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue"></a>

```go
func AuthorizingClaimMatchValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a>

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName"></a>

```go
func InboundTokenClaimName() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType"></a>

```go
func InboundTokenClaimValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim">CustomClaim</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverride">PrivateEndpointOverride</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```go
func AllowedAudience() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```go
func AllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomClaim`<sup>Required</sup> <a name="CustomClaim" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim"></a>

```go
func CustomClaim() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a>

---

##### `PrivateEndpointOverride`<sup>Required</sup> <a name="PrivateEndpointOverride" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverride"></a>

```go
func PrivateEndpointOverride() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">RoutingDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">VpcIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```go
func EndpointIpAddressType() *string
```

- *Type:* *string

---

##### `RoutingDomain`<sup>Required</sup> <a name="RoutingDomain" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```go
func RoutingDomain() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```go
func VpcIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedVpcResource`<sup>Required</sup> <a name="ManagedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource"></a>

```go
func ManagedVpcResource() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a>

---

##### `SelfManagedLatticeResource`<sup>Required</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```go
func SelfManagedLatticeResource() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverride</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">EndpointIpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">RoutingDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">VpcIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointIpAddressType`<sup>Required</sup> <a name="EndpointIpAddressType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```go
func EndpointIpAddressType() *string
```

- *Type:* *string

---

##### `RoutingDomain`<sup>Required</sup> <a name="RoutingDomain" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```go
func RoutingDomain() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```go
func VpcIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResource">ManagedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResource">SelfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedVpcResource`<sup>Required</sup> <a name="ManagedVpcResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.managedVpcResource"></a>

```go
func ManagedVpcResource() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointManagedVpcResourceList</a>

---

##### `SelfManagedLatticeResource`<sup>Required</sup> <a name="SelfManagedLatticeResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```go
func SelfManagedLatticeResource() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpoint</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```go
func ResourceConfigurationIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridePrivateEndpointSelfManagedLatticeResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```go
func ResourceConfigurationIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```go
func CustomJwtAuthorizer() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfiguration</a>

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationList <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference <a name="DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration">DataAwsAgentregistryRegistryDiscoveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerConfiguration"></a>

```go
func AuthorizerConfiguration() DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList">DataAwsAgentregistryRegistryDiscoveryConfigurationAuthorizerConfigurationList</a>

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.authorizerType"></a>

```go
func AuthorizerType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryDiscoveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryDiscoveryConfiguration">DataAwsAgentregistryRegistryDiscoveryConfiguration</a>

---


### DataAwsAgentregistryRegistryEncryptionConfigurationList <a name="DataAwsAgentregistryRegistryEncryptionConfigurationList" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAgentregistryRegistryEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference <a name="DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsagentregistryregistry"

dataawsagentregistryregistry.NewDataAwsAgentregistryRegistryEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration">DataAwsAgentregistryRegistryEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAgentregistryRegistryEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAgentregistryRegistry.DataAwsAgentregistryRegistryEncryptionConfiguration">DataAwsAgentregistryRegistryEncryptionConfiguration</a>

---



