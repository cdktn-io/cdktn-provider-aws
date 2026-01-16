# `dataAwsCloudfrontConnectionGroup` Submodule <a name="`dataAwsCloudfrontConnectionGroup` Submodule" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontConnectionGroup <a name="DataAwsCloudfrontConnectionGroup" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_connection_group aws_cloudfront_connection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontconnectiongroup"

dataawscloudfrontconnectiongroup.NewDataAwsCloudfrontConnectionGroup(scope Construct, id *string, config DataAwsCloudfrontConnectionGroupConfig) DataAwsCloudfrontConnectionGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig">DataAwsCloudfrontConnectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig">DataAwsCloudfrontConnectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetRoutingEndpoint">ResetRoutingEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetRoutingEndpoint` <a name="ResetRoutingEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.resetRoutingEndpoint"></a>

```go
func ResetRoutingEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudfrontConnectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontconnectiongroup"

dataawscloudfrontconnectiongroup.DataAwsCloudfrontConnectionGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontconnectiongroup"

dataawscloudfrontconnectiongroup.DataAwsCloudfrontConnectionGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontconnectiongroup"

dataawscloudfrontconnectiongroup.DataAwsCloudfrontConnectionGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontconnectiongroup"

dataawscloudfrontconnectiongroup.DataAwsCloudfrontConnectionGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsCloudfrontConnectionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsCloudfrontConnectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsCloudfrontConnectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_connection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontConnectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.anycastIpListId">AnycastIpListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.ipv6Enabled">Ipv6Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpointInput">RoutingEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpoint">RoutingEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AnycastIpListId`<sup>Required</sup> <a name="AnycastIpListId" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.anycastIpListId"></a>

```go
func AnycastIpListId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Ipv6Enabled`<sup>Required</sup> <a name="Ipv6Enabled" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.ipv6Enabled"></a>

```go
func Ipv6Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RoutingEndpointInput`<sup>Optional</sup> <a name="RoutingEndpointInput" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpointInput"></a>

```go
func RoutingEndpointInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoutingEndpoint`<sup>Required</sup> <a name="RoutingEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.routingEndpoint"></a>

```go
func RoutingEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontConnectionGroupConfig <a name="DataAwsCloudfrontConnectionGroupConfig" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontconnectiongroup"

&dataawscloudfrontconnectiongroup.DataAwsCloudfrontConnectionGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	RoutingEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_connection_group#id DataAwsCloudfrontConnectionGroup#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.routingEndpoint">RoutingEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_connection_group#routing_endpoint DataAwsCloudfrontConnectionGroup#routing_endpoint}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_connection_group#id DataAwsCloudfrontConnectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoutingEndpoint`<sup>Optional</sup> <a name="RoutingEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontConnectionGroup.DataAwsCloudfrontConnectionGroupConfig.property.routingEndpoint"></a>

```go
RoutingEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_connection_group#routing_endpoint DataAwsCloudfrontConnectionGroup#routing_endpoint}.

---



