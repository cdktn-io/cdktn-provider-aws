# `dataAwsEcsService` Submodule <a name="`dataAwsEcsService` Submodule" id="@cdktf/provider-aws.dataAwsEcsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcsService <a name="DataAwsEcsService" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service aws_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsService(Construct Scope, string Id, DataAwsEcsServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig">DataAwsEcsServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig">DataAwsEcsServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcsService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcsService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcsService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcsService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEcsService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsEcsService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcsService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcsService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcsService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.availabilityZoneRebalancing">AvailabilityZoneRebalancing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList">DataAwsEcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList">DataAwsEcsServiceDeploymentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentController">DeploymentController</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList">DataAwsEcsServiceDeploymentControllerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deployments">Deployments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList">DataAwsEcsServiceDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.desiredCount">DesiredCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.events">Events</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList">DataAwsEcsServiceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.healthCheckGracePeriodSeconds">HealthCheckGracePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.iamRole">IamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.launchType">LaunchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList">DataAwsEcsServiceLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList">DataAwsEcsServiceNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.orderedPlacementStrategy">OrderedPlacementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList">DataAwsEcsServiceOrderedPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.pendingCount">PendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList">DataAwsEcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformFamily">PlatformFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.runningCount">RunningCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.schedulingStrategy">SchedulingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceRegistries">ServiceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList">DataAwsEcsServiceServiceRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskDefinition">TaskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskSets">TaskSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList">DataAwsEcsServiceTaskSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneRebalancing`<sup>Required</sup> <a name="AvailabilityZoneRebalancing" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.availabilityZoneRebalancing"></a>

```csharp
public string AvailabilityZoneRebalancing { get; }
```

- *Type:* string

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.capacityProviderStrategy"></a>

```csharp
public DataAwsEcsServiceCapacityProviderStrategyList CapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList">DataAwsEcsServiceCapacityProviderStrategyList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DeploymentConfiguration`<sup>Required</sup> <a name="DeploymentConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentConfiguration"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationList DeploymentConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList">DataAwsEcsServiceDeploymentConfigurationList</a>

---

##### `DeploymentController`<sup>Required</sup> <a name="DeploymentController" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentController"></a>

```csharp
public DataAwsEcsServiceDeploymentControllerList DeploymentController { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList">DataAwsEcsServiceDeploymentControllerList</a>

---

##### `Deployments`<sup>Required</sup> <a name="Deployments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deployments"></a>

```csharp
public DataAwsEcsServiceDeploymentsList Deployments { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList">DataAwsEcsServiceDeploymentsList</a>

---

##### `DesiredCount`<sup>Required</sup> <a name="DesiredCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.desiredCount"></a>

```csharp
public double DesiredCount { get; }
```

- *Type:* double

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableEcsManagedTags"></a>

```csharp
public IResolvable EnableEcsManagedTags { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableExecuteCommand"></a>

```csharp
public IResolvable EnableExecuteCommand { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.events"></a>

```csharp
public DataAwsEcsServiceEventsList Events { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList">DataAwsEcsServiceEventsList</a>

---

##### `HealthCheckGracePeriodSeconds`<sup>Required</sup> <a name="HealthCheckGracePeriodSeconds" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.healthCheckGracePeriodSeconds"></a>

```csharp
public double HealthCheckGracePeriodSeconds { get; }
```

- *Type:* double

---

##### `IamRole`<sup>Required</sup> <a name="IamRole" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.iamRole"></a>

```csharp
public string IamRole { get; }
```

- *Type:* string

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.launchType"></a>

```csharp
public string LaunchType { get; }
```

- *Type:* string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.loadBalancer"></a>

```csharp
public DataAwsEcsServiceLoadBalancerList LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList">DataAwsEcsServiceLoadBalancerList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.networkConfiguration"></a>

```csharp
public DataAwsEcsServiceNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList">DataAwsEcsServiceNetworkConfigurationList</a>

---

##### `OrderedPlacementStrategy`<sup>Required</sup> <a name="OrderedPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.orderedPlacementStrategy"></a>

```csharp
public DataAwsEcsServiceOrderedPlacementStrategyList OrderedPlacementStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList">DataAwsEcsServiceOrderedPlacementStrategyList</a>

---

##### `PendingCount`<sup>Required</sup> <a name="PendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.pendingCount"></a>

```csharp
public double PendingCount { get; }
```

- *Type:* double

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.placementConstraints"></a>

```csharp
public DataAwsEcsServicePlacementConstraintsList PlacementConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList">DataAwsEcsServicePlacementConstraintsList</a>

---

##### `PlatformFamily`<sup>Required</sup> <a name="PlatformFamily" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformFamily"></a>

```csharp
public string PlatformFamily { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

##### `RunningCount`<sup>Required</sup> <a name="RunningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.runningCount"></a>

```csharp
public double RunningCount { get; }
```

- *Type:* double

---

##### `SchedulingStrategy`<sup>Required</sup> <a name="SchedulingStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.schedulingStrategy"></a>

```csharp
public string SchedulingStrategy { get; }
```

- *Type:* string

---

##### `ServiceRegistries`<sup>Required</sup> <a name="ServiceRegistries" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceRegistries"></a>

```csharp
public DataAwsEcsServiceServiceRegistriesList ServiceRegistries { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList">DataAwsEcsServiceServiceRegistriesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TaskDefinition`<sup>Required</sup> <a name="TaskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskDefinition"></a>

```csharp
public string TaskDefinition { get; }
```

- *Type:* string

---

##### `TaskSets`<sup>Required</sup> <a name="TaskSets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskSets"></a>

```csharp
public DataAwsEcsServiceTaskSetsList TaskSets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList">DataAwsEcsServiceTaskSetsList</a>

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcsServiceCapacityProviderStrategy <a name="DataAwsEcsServiceCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceCapacityProviderStrategy {

};
```


### DataAwsEcsServiceConfig <a name="DataAwsEcsServiceConfig" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterArn,
    string ServiceName,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#region DataAwsEcsService#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}.

---

### DataAwsEcsServiceDeploymentConfiguration <a name="DataAwsEcsServiceDeploymentConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfiguration {

};
```


### DataAwsEcsServiceDeploymentConfigurationAlarms <a name="DataAwsEcsServiceDeploymentConfigurationAlarms" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationAlarms {

};
```


### DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration {

};
```


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker {

};
```


### DataAwsEcsServiceDeploymentConfigurationLifecycleHook <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHook" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationLifecycleHook {

};
```


### DataAwsEcsServiceDeploymentConfigurationLinearConfiguration <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationLinearConfiguration {

};
```


### DataAwsEcsServiceDeploymentController <a name="DataAwsEcsServiceDeploymentController" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentController {

};
```


### DataAwsEcsServiceDeployments <a name="DataAwsEcsServiceDeployments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeployments {

};
```


### DataAwsEcsServiceEvents <a name="DataAwsEcsServiceEvents" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceEvents {

};
```


### DataAwsEcsServiceLoadBalancer <a name="DataAwsEcsServiceLoadBalancer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceLoadBalancer {

};
```


### DataAwsEcsServiceLoadBalancerAdvancedConfiguration <a name="DataAwsEcsServiceLoadBalancerAdvancedConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceLoadBalancerAdvancedConfiguration {

};
```


### DataAwsEcsServiceNetworkConfiguration <a name="DataAwsEcsServiceNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceNetworkConfiguration {

};
```


### DataAwsEcsServiceOrderedPlacementStrategy <a name="DataAwsEcsServiceOrderedPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceOrderedPlacementStrategy {

};
```


### DataAwsEcsServicePlacementConstraints <a name="DataAwsEcsServicePlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServicePlacementConstraints {

};
```


### DataAwsEcsServiceServiceRegistries <a name="DataAwsEcsServiceServiceRegistries" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceServiceRegistries {

};
```


### DataAwsEcsServiceTaskSets <a name="DataAwsEcsServiceTaskSets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceTaskSets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcsServiceCapacityProviderStrategyList <a name="DataAwsEcsServiceCapacityProviderStrategyList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get"></a>

```csharp
private DataAwsEcsServiceCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceCapacityProviderStrategyOutputReference <a name="DataAwsEcsServiceCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy">DataAwsEcsServiceCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceCapacityProviderStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy">DataAwsEcsServiceCapacityProviderStrategy</a>

---


### DataAwsEcsServiceDeploymentConfigurationAlarmsList <a name="DataAwsEcsServiceDeploymentConfigurationAlarmsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationAlarmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable">Enable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback">Rollback</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms">DataAwsEcsServiceDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; }
```

- *Type:* string[]

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```csharp
public IResolvable Enable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback"></a>

```csharp
public IResolvable Rollback { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationAlarms InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms">DataAwsEcsServiceDeploymentConfigurationAlarms</a>

---


### DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes">CanaryBakeTimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent">CanaryPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanaryBakeTimeInMinutes`<sup>Required</sup> <a name="CanaryBakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes"></a>

```csharp
public string CanaryBakeTimeInMinutes { get; }
```

- *Type:* string

---

##### `CanaryPercent`<sup>Required</sup> <a name="CanaryPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent"></a>

```csharp
public double CanaryPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration</a>

---


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable">Enable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback">Rollback</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable"></a>

```csharp
public IResolvable Enable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```csharp
public IResolvable Rollback { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a>

---


### DataAwsEcsServiceDeploymentConfigurationLifecycleHookList <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHookList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationLifecycleHookList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookDetails">HookDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn">HookTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages">LifecycleStages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook">DataAwsEcsServiceDeploymentConfigurationLifecycleHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HookDetails`<sup>Required</sup> <a name="HookDetails" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookDetails"></a>

```csharp
public string HookDetails { get; }
```

- *Type:* string

---

##### `HookTargetArn`<sup>Required</sup> <a name="HookTargetArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn"></a>

```csharp
public string HookTargetArn { get; }
```

- *Type:* string

---

##### `LifecycleStages`<sup>Required</sup> <a name="LifecycleStages" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages"></a>

```csharp
public string[] LifecycleStages { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationLifecycleHook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook">DataAwsEcsServiceDeploymentConfigurationLifecycleHook</a>

---


### DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes">StepBakeTimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent">StepPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsEcsServiceDeploymentConfigurationLinearConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StepBakeTimeInMinutes`<sup>Required</sup> <a name="StepBakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes"></a>

```csharp
public string StepBakeTimeInMinutes { get; }
```

- *Type:* string

---

##### `StepPercent`<sup>Required</sup> <a name="StepPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent"></a>

```csharp
public double StepPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationLinearConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsEcsServiceDeploymentConfigurationLinearConfiguration</a>

---


### DataAwsEcsServiceDeploymentConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList">DataAwsEcsServiceDeploymentConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">BakeTimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration">CanaryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList">DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker">DeploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook">LifecycleHook</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList">DataAwsEcsServiceDeploymentConfigurationLifecycleHookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration">LinearConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList">DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent">MaximumPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent">MinimumHealthyPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration">DataAwsEcsServiceDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.alarms"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationAlarmsList Alarms { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList">DataAwsEcsServiceDeploymentConfigurationAlarmsList</a>

---

##### `BakeTimeInMinutes`<sup>Required</sup> <a name="BakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```csharp
public string BakeTimeInMinutes { get; }
```

- *Type:* string

---

##### `CanaryConfiguration`<sup>Required</sup> <a name="CanaryConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList CanaryConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList">DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList</a>

---

##### `DeploymentCircuitBreaker`<sup>Required</sup> <a name="DeploymentCircuitBreaker" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList DeploymentCircuitBreaker { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList</a>

---

##### `LifecycleHook`<sup>Required</sup> <a name="LifecycleHook" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationLifecycleHookList LifecycleHook { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList">DataAwsEcsServiceDeploymentConfigurationLifecycleHookList</a>

---

##### `LinearConfiguration`<sup>Required</sup> <a name="LinearConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration"></a>

```csharp
public DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList LinearConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList">DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList</a>

---

##### `MaximumPercent`<sup>Required</sup> <a name="MaximumPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent"></a>

```csharp
public double MaximumPercent { get; }
```

- *Type:* double

---

##### `MinimumHealthyPercent`<sup>Required</sup> <a name="MinimumHealthyPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent"></a>

```csharp
public double MinimumHealthyPercent { get; }
```

- *Type:* double

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeploymentConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration">DataAwsEcsServiceDeploymentConfiguration</a>

---


### DataAwsEcsServiceDeploymentControllerList <a name="DataAwsEcsServiceDeploymentControllerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentControllerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentControllerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentControllerOutputReference <a name="DataAwsEcsServiceDeploymentControllerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController">DataAwsEcsServiceDeploymentController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeploymentController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController">DataAwsEcsServiceDeploymentController</a>

---


### DataAwsEcsServiceDeploymentsList <a name="DataAwsEcsServiceDeploymentsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get"></a>

```csharp
private DataAwsEcsServiceDeploymentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentsOutputReference <a name="DataAwsEcsServiceDeploymentsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceDeploymentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.desiredCount">DesiredCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.pendingCount">PendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.runningCount">RunningCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.taskDefinition">TaskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments">DataAwsEcsServiceDeployments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DesiredCount`<sup>Required</sup> <a name="DesiredCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.desiredCount"></a>

```csharp
public double DesiredCount { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PendingCount`<sup>Required</sup> <a name="PendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.pendingCount"></a>

```csharp
public double PendingCount { get; }
```

- *Type:* double

---

##### `RunningCount`<sup>Required</sup> <a name="RunningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.runningCount"></a>

```csharp
public double RunningCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TaskDefinition`<sup>Required</sup> <a name="TaskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.taskDefinition"></a>

```csharp
public string TaskDefinition { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceDeployments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments">DataAwsEcsServiceDeployments</a>

---


### DataAwsEcsServiceEventsList <a name="DataAwsEcsServiceEventsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get"></a>

```csharp
private DataAwsEcsServiceEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceEventsOutputReference <a name="DataAwsEcsServiceEventsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents">DataAwsEcsServiceEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents">DataAwsEcsServiceEvents</a>

---


### DataAwsEcsServiceLoadBalancerAdvancedConfigurationList <a name="DataAwsEcsServiceLoadBalancerAdvancedConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceLoadBalancerAdvancedConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get"></a>

```csharp
private DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference <a name="DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn">AlternateTargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule">ProductionListenerRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule">TestListenerRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration">DataAwsEcsServiceLoadBalancerAdvancedConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlternateTargetGroupArn`<sup>Required</sup> <a name="AlternateTargetGroupArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn"></a>

```csharp
public string AlternateTargetGroupArn { get; }
```

- *Type:* string

---

##### `ProductionListenerRule`<sup>Required</sup> <a name="ProductionListenerRule" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule"></a>

```csharp
public string ProductionListenerRule { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TestListenerRule`<sup>Required</sup> <a name="TestListenerRule" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule"></a>

```csharp
public string TestListenerRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceLoadBalancerAdvancedConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration">DataAwsEcsServiceLoadBalancerAdvancedConfiguration</a>

---


### DataAwsEcsServiceLoadBalancerList <a name="DataAwsEcsServiceLoadBalancerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get"></a>

```csharp
private DataAwsEcsServiceLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceLoadBalancerOutputReference <a name="DataAwsEcsServiceLoadBalancerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.advancedConfiguration">AdvancedConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList">DataAwsEcsServiceLoadBalancerAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.elbName">ElbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer">DataAwsEcsServiceLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedConfiguration`<sup>Required</sup> <a name="AdvancedConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.advancedConfiguration"></a>

```csharp
public DataAwsEcsServiceLoadBalancerAdvancedConfigurationList AdvancedConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList">DataAwsEcsServiceLoadBalancerAdvancedConfigurationList</a>

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `ElbName`<sup>Required</sup> <a name="ElbName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.elbName"></a>

```csharp
public string ElbName { get; }
```

- *Type:* string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer">DataAwsEcsServiceLoadBalancer</a>

---


### DataAwsEcsServiceNetworkConfigurationList <a name="DataAwsEcsServiceNetworkConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get"></a>

```csharp
private DataAwsEcsServiceNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceNetworkConfigurationOutputReference <a name="DataAwsEcsServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration">DataAwsEcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```csharp
public IResolvable AssignPublicIp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration">DataAwsEcsServiceNetworkConfiguration</a>

---


### DataAwsEcsServiceOrderedPlacementStrategyList <a name="DataAwsEcsServiceOrderedPlacementStrategyList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceOrderedPlacementStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get"></a>

```csharp
private DataAwsEcsServiceOrderedPlacementStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceOrderedPlacementStrategyOutputReference <a name="DataAwsEcsServiceOrderedPlacementStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceOrderedPlacementStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy">DataAwsEcsServiceOrderedPlacementStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceOrderedPlacementStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy">DataAwsEcsServiceOrderedPlacementStrategy</a>

---


### DataAwsEcsServicePlacementConstraintsList <a name="DataAwsEcsServicePlacementConstraintsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServicePlacementConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get"></a>

```csharp
private DataAwsEcsServicePlacementConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServicePlacementConstraintsOutputReference <a name="DataAwsEcsServicePlacementConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServicePlacementConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints">DataAwsEcsServicePlacementConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServicePlacementConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints">DataAwsEcsServicePlacementConstraints</a>

---


### DataAwsEcsServiceServiceRegistriesList <a name="DataAwsEcsServiceServiceRegistriesList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceServiceRegistriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get"></a>

```csharp
private DataAwsEcsServiceServiceRegistriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceServiceRegistriesOutputReference <a name="DataAwsEcsServiceServiceRegistriesOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceServiceRegistriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.registryArn">RegistryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries">DataAwsEcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```csharp
public string RegistryArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceServiceRegistries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries">DataAwsEcsServiceServiceRegistries</a>

---


### DataAwsEcsServiceTaskSetsList <a name="DataAwsEcsServiceTaskSetsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceTaskSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get"></a>

```csharp
private DataAwsEcsServiceTaskSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEcsServiceTaskSetsOutputReference <a name="DataAwsEcsServiceTaskSetsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEcsServiceTaskSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.pendingCount">PendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.runningCount">RunningCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.stabilityStatus">StabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.taskDefinition">TaskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets">DataAwsEcsServiceTaskSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PendingCount`<sup>Required</sup> <a name="PendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.pendingCount"></a>

```csharp
public double PendingCount { get; }
```

- *Type:* double

---

##### `RunningCount`<sup>Required</sup> <a name="RunningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.runningCount"></a>

```csharp
public double RunningCount { get; }
```

- *Type:* double

---

##### `StabilityStatus`<sup>Required</sup> <a name="StabilityStatus" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.stabilityStatus"></a>

```csharp
public string StabilityStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TaskDefinition`<sup>Required</sup> <a name="TaskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.taskDefinition"></a>

```csharp
public string TaskDefinition { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEcsServiceTaskSets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets">DataAwsEcsServiceTaskSets</a>

---



