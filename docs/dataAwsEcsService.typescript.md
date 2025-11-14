# `dataAwsEcsService` Submodule <a name="`dataAwsEcsService` Submodule" id="@cdktf/provider-aws.dataAwsEcsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcsService <a name="DataAwsEcsService" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service aws_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsService(scope: Construct, id: string, config: DataAwsEcsServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig">DataAwsEcsServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig">DataAwsEcsServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcsService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

dataAwsEcsService.DataAwsEcsService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

dataAwsEcsService.DataAwsEcsService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

dataAwsEcsService.DataAwsEcsService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

dataAwsEcsService.DataAwsEcsService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEcsService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcsService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcsService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcsService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.availabilityZoneRebalancing">availabilityZoneRebalancing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList">DataAwsEcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList">DataAwsEcsServiceDeploymentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentController">deploymentController</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList">DataAwsEcsServiceDeploymentControllerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deployments">deployments</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList">DataAwsEcsServiceDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.desiredCount">desiredCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.events">events</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList">DataAwsEcsServiceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.healthCheckGracePeriodSeconds">healthCheckGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList">DataAwsEcsServiceLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList">DataAwsEcsServiceNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.orderedPlacementStrategy">orderedPlacementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList">DataAwsEcsServiceOrderedPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.pendingCount">pendingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList">DataAwsEcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformFamily">platformFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.runningCount">runningCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.schedulingStrategy">schedulingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList">DataAwsEcsServiceServiceRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskSets">taskSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList">DataAwsEcsServiceTaskSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZoneRebalancing`<sup>Required</sup> <a name="availabilityZoneRebalancing" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.availabilityZoneRebalancing"></a>

```typescript
public readonly availabilityZoneRebalancing: string;
```

- *Type:* string

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: DataAwsEcsServiceCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList">DataAwsEcsServiceCapacityProviderStrategyList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: DataAwsEcsServiceDeploymentConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList">DataAwsEcsServiceDeploymentConfigurationList</a>

---

##### `deploymentController`<sup>Required</sup> <a name="deploymentController" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deploymentController"></a>

```typescript
public readonly deploymentController: DataAwsEcsServiceDeploymentControllerList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList">DataAwsEcsServiceDeploymentControllerList</a>

---

##### `deployments`<sup>Required</sup> <a name="deployments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.deployments"></a>

```typescript
public readonly deployments: DataAwsEcsServiceDeploymentsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList">DataAwsEcsServiceDeploymentsList</a>

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.events"></a>

```typescript
public readonly events: DataAwsEcsServiceEventsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList">DataAwsEcsServiceEventsList</a>

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="healthCheckGracePeriodSeconds" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.healthCheckGracePeriodSeconds"></a>

```typescript
public readonly healthCheckGracePeriodSeconds: number;
```

- *Type:* number

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: DataAwsEcsServiceLoadBalancerList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList">DataAwsEcsServiceLoadBalancerList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsEcsServiceNetworkConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList">DataAwsEcsServiceNetworkConfigurationList</a>

---

##### `orderedPlacementStrategy`<sup>Required</sup> <a name="orderedPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.orderedPlacementStrategy"></a>

```typescript
public readonly orderedPlacementStrategy: DataAwsEcsServiceOrderedPlacementStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList">DataAwsEcsServiceOrderedPlacementStrategyList</a>

---

##### `pendingCount`<sup>Required</sup> <a name="pendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.pendingCount"></a>

```typescript
public readonly pendingCount: number;
```

- *Type:* number

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: DataAwsEcsServicePlacementConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList">DataAwsEcsServicePlacementConstraintsList</a>

---

##### `platformFamily`<sup>Required</sup> <a name="platformFamily" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformFamily"></a>

```typescript
public readonly platformFamily: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `runningCount`<sup>Required</sup> <a name="runningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.runningCount"></a>

```typescript
public readonly runningCount: number;
```

- *Type:* number

---

##### `schedulingStrategy`<sup>Required</sup> <a name="schedulingStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.schedulingStrategy"></a>

```typescript
public readonly schedulingStrategy: string;
```

- *Type:* string

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceRegistries"></a>

```typescript
public readonly serviceRegistries: DataAwsEcsServiceServiceRegistriesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList">DataAwsEcsServiceServiceRegistriesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

---

##### `taskSets`<sup>Required</sup> <a name="taskSets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.taskSets"></a>

```typescript
public readonly taskSets: DataAwsEcsServiceTaskSetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList">DataAwsEcsServiceTaskSetsList</a>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcsServiceCapacityProviderStrategy <a name="DataAwsEcsServiceCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceCapacityProviderStrategy: dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy = { ... }
```


### DataAwsEcsServiceConfig <a name="DataAwsEcsServiceConfig" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceConfig: dataAwsEcsService.DataAwsEcsServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#cluster_arn DataAwsEcsService#cluster_arn}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#service_name DataAwsEcsService#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#id DataAwsEcsService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#region DataAwsEcsService#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/ecs_service#tags DataAwsEcsService#tags}.

---

### DataAwsEcsServiceDeploymentConfiguration <a name="DataAwsEcsServiceDeploymentConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeploymentConfiguration: dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration = { ... }
```


### DataAwsEcsServiceDeploymentConfigurationAlarms <a name="DataAwsEcsServiceDeploymentConfigurationAlarms" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeploymentConfigurationAlarms: dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms = { ... }
```


### DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeploymentConfigurationCanaryConfiguration: dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration = { ... }
```


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker: dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker = { ... }
```


### DataAwsEcsServiceDeploymentConfigurationLifecycleHook <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHook" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeploymentConfigurationLifecycleHook: dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook = { ... }
```


### DataAwsEcsServiceDeploymentConfigurationLinearConfiguration <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeploymentConfigurationLinearConfiguration: dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration = { ... }
```


### DataAwsEcsServiceDeploymentController <a name="DataAwsEcsServiceDeploymentController" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeploymentController: dataAwsEcsService.DataAwsEcsServiceDeploymentController = { ... }
```


### DataAwsEcsServiceDeployments <a name="DataAwsEcsServiceDeployments" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceDeployments: dataAwsEcsService.DataAwsEcsServiceDeployments = { ... }
```


### DataAwsEcsServiceEvents <a name="DataAwsEcsServiceEvents" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceEvents: dataAwsEcsService.DataAwsEcsServiceEvents = { ... }
```


### DataAwsEcsServiceLoadBalancer <a name="DataAwsEcsServiceLoadBalancer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceLoadBalancer: dataAwsEcsService.DataAwsEcsServiceLoadBalancer = { ... }
```


### DataAwsEcsServiceLoadBalancerAdvancedConfiguration <a name="DataAwsEcsServiceLoadBalancerAdvancedConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceLoadBalancerAdvancedConfiguration: dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration = { ... }
```


### DataAwsEcsServiceNetworkConfiguration <a name="DataAwsEcsServiceNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceNetworkConfiguration: dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration = { ... }
```


### DataAwsEcsServiceOrderedPlacementStrategy <a name="DataAwsEcsServiceOrderedPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceOrderedPlacementStrategy: dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy = { ... }
```


### DataAwsEcsServicePlacementConstraints <a name="DataAwsEcsServicePlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServicePlacementConstraints: dataAwsEcsService.DataAwsEcsServicePlacementConstraints = { ... }
```


### DataAwsEcsServiceServiceRegistries <a name="DataAwsEcsServiceServiceRegistries" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceServiceRegistries: dataAwsEcsService.DataAwsEcsServiceServiceRegistries = { ... }
```


### DataAwsEcsServiceTaskSets <a name="DataAwsEcsServiceTaskSets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

const dataAwsEcsServiceTaskSets: dataAwsEcsService.DataAwsEcsServiceTaskSets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcsServiceCapacityProviderStrategyList <a name="DataAwsEcsServiceCapacityProviderStrategyList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceCapacityProviderStrategyOutputReference <a name="DataAwsEcsServiceCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy">DataAwsEcsServiceCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceCapacityProviderStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceCapacityProviderStrategy">DataAwsEcsServiceCapacityProviderStrategy</a>

---


### DataAwsEcsServiceDeploymentConfigurationAlarmsList <a name="DataAwsEcsServiceDeploymentConfigurationAlarmsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames">alarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable">enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback">rollback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms">DataAwsEcsServiceDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNames`<sup>Required</sup> <a name="alarmNames" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```typescript
public readonly alarmNames: string[];
```

- *Type:* string[]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback"></a>

```typescript
public readonly rollback: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeploymentConfigurationAlarms;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarms">DataAwsEcsServiceDeploymentConfigurationAlarms</a>

---


### DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes">canaryBakeTimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent">canaryPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canaryBakeTimeInMinutes`<sup>Required</sup> <a name="canaryBakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes"></a>

```typescript
public readonly canaryBakeTimeInMinutes: string;
```

- *Type:* string

---

##### `canaryPercent`<sup>Required</sup> <a name="canaryPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent"></a>

```typescript
public readonly canaryPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsEcsServiceDeploymentConfigurationCanaryConfiguration</a>

---


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable">enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback">rollback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rollback`<sup>Required</sup> <a name="rollback" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```typescript
public readonly rollback: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a>

---


### DataAwsEcsServiceDeploymentConfigurationLifecycleHookList <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHookList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookDetails">hookDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn">hookTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages">lifecycleStages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook">DataAwsEcsServiceDeploymentConfigurationLifecycleHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hookDetails`<sup>Required</sup> <a name="hookDetails" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookDetails"></a>

```typescript
public readonly hookDetails: string;
```

- *Type:* string

---

##### `hookTargetArn`<sup>Required</sup> <a name="hookTargetArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.hookTargetArn"></a>

```typescript
public readonly hookTargetArn: string;
```

- *Type:* string

---

##### `lifecycleStages`<sup>Required</sup> <a name="lifecycleStages" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.lifecycleStages"></a>

```typescript
public readonly lifecycleStages: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeploymentConfigurationLifecycleHook;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHook">DataAwsEcsServiceDeploymentConfigurationLifecycleHook</a>

---


### DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes">stepBakeTimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent">stepPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsEcsServiceDeploymentConfigurationLinearConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepBakeTimeInMinutes`<sup>Required</sup> <a name="stepBakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes"></a>

```typescript
public readonly stepBakeTimeInMinutes: string;
```

- *Type:* string

---

##### `stepPercent`<sup>Required</sup> <a name="stepPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent"></a>

```typescript
public readonly stepPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeploymentConfigurationLinearConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsEcsServiceDeploymentConfigurationLinearConfiguration</a>

---


### DataAwsEcsServiceDeploymentConfigurationList <a name="DataAwsEcsServiceDeploymentConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentConfigurationOutputReference <a name="DataAwsEcsServiceDeploymentConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList">DataAwsEcsServiceDeploymentConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">bakeTimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration">canaryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList">DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker">deploymentCircuitBreaker</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook">lifecycleHook</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList">DataAwsEcsServiceDeploymentConfigurationLifecycleHookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration">linearConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList">DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent">maximumPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent">minimumHealthyPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration">DataAwsEcsServiceDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.alarms"></a>

```typescript
public readonly alarms: DataAwsEcsServiceDeploymentConfigurationAlarmsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationAlarmsList">DataAwsEcsServiceDeploymentConfigurationAlarmsList</a>

---

##### `bakeTimeInMinutes`<sup>Required</sup> <a name="bakeTimeInMinutes" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```typescript
public readonly bakeTimeInMinutes: string;
```

- *Type:* string

---

##### `canaryConfiguration`<sup>Required</sup> <a name="canaryConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration"></a>

```typescript
public readonly canaryConfiguration: DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList">DataAwsEcsServiceDeploymentConfigurationCanaryConfigurationList</a>

---

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="deploymentCircuitBreaker" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker"></a>

```typescript
public readonly deploymentCircuitBreaker: DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList">DataAwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerList</a>

---

##### `lifecycleHook`<sup>Required</sup> <a name="lifecycleHook" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHook"></a>

```typescript
public readonly lifecycleHook: DataAwsEcsServiceDeploymentConfigurationLifecycleHookList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLifecycleHookList">DataAwsEcsServiceDeploymentConfigurationLifecycleHookList</a>

---

##### `linearConfiguration`<sup>Required</sup> <a name="linearConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration"></a>

```typescript
public readonly linearConfiguration: DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList">DataAwsEcsServiceDeploymentConfigurationLinearConfigurationList</a>

---

##### `maximumPercent`<sup>Required</sup> <a name="maximumPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent"></a>

```typescript
public readonly maximumPercent: number;
```

- *Type:* number

---

##### `minimumHealthyPercent`<sup>Required</sup> <a name="minimumHealthyPercent" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent"></a>

```typescript
public readonly minimumHealthyPercent: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeploymentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentConfiguration">DataAwsEcsServiceDeploymentConfiguration</a>

---


### DataAwsEcsServiceDeploymentControllerList <a name="DataAwsEcsServiceDeploymentControllerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentControllerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentControllerOutputReference <a name="DataAwsEcsServiceDeploymentControllerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController">DataAwsEcsServiceDeploymentController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeploymentController;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentController">DataAwsEcsServiceDeploymentController</a>

---


### DataAwsEcsServiceDeploymentsList <a name="DataAwsEcsServiceDeploymentsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceDeploymentsOutputReference <a name="DataAwsEcsServiceDeploymentsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.desiredCount">desiredCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.pendingCount">pendingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.runningCount">runningCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments">DataAwsEcsServiceDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pendingCount`<sup>Required</sup> <a name="pendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.pendingCount"></a>

```typescript
public readonly pendingCount: number;
```

- *Type:* number

---

##### `runningCount`<sup>Required</sup> <a name="runningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.runningCount"></a>

```typescript
public readonly runningCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeploymentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceDeployments;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceDeployments">DataAwsEcsServiceDeployments</a>

---


### DataAwsEcsServiceEventsList <a name="DataAwsEcsServiceEventsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceEventsOutputReference <a name="DataAwsEcsServiceEventsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents">DataAwsEcsServiceEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceEvents;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceEvents">DataAwsEcsServiceEvents</a>

---


### DataAwsEcsServiceLoadBalancerAdvancedConfigurationList <a name="DataAwsEcsServiceLoadBalancerAdvancedConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference <a name="DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn">alternateTargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule">productionListenerRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule">testListenerRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration">DataAwsEcsServiceLoadBalancerAdvancedConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateTargetGroupArn`<sup>Required</sup> <a name="alternateTargetGroupArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.alternateTargetGroupArn"></a>

```typescript
public readonly alternateTargetGroupArn: string;
```

- *Type:* string

---

##### `productionListenerRule`<sup>Required</sup> <a name="productionListenerRule" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.productionListenerRule"></a>

```typescript
public readonly productionListenerRule: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `testListenerRule`<sup>Required</sup> <a name="testListenerRule" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.testListenerRule"></a>

```typescript
public readonly testListenerRule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceLoadBalancerAdvancedConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfiguration">DataAwsEcsServiceLoadBalancerAdvancedConfiguration</a>

---


### DataAwsEcsServiceLoadBalancerList <a name="DataAwsEcsServiceLoadBalancerList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceLoadBalancerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceLoadBalancerOutputReference <a name="DataAwsEcsServiceLoadBalancerOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.advancedConfiguration">advancedConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList">DataAwsEcsServiceLoadBalancerAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.elbName">elbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer">DataAwsEcsServiceLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedConfiguration`<sup>Required</sup> <a name="advancedConfiguration" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.advancedConfiguration"></a>

```typescript
public readonly advancedConfiguration: DataAwsEcsServiceLoadBalancerAdvancedConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerAdvancedConfigurationList">DataAwsEcsServiceLoadBalancerAdvancedConfigurationList</a>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `elbName`<sup>Required</sup> <a name="elbName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.elbName"></a>

```typescript
public readonly elbName: string;
```

- *Type:* string

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceLoadBalancer">DataAwsEcsServiceLoadBalancer</a>

---


### DataAwsEcsServiceNetworkConfigurationList <a name="DataAwsEcsServiceNetworkConfigurationList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceNetworkConfigurationOutputReference <a name="DataAwsEcsServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration">DataAwsEcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceNetworkConfiguration">DataAwsEcsServiceNetworkConfiguration</a>

---


### DataAwsEcsServiceOrderedPlacementStrategyList <a name="DataAwsEcsServiceOrderedPlacementStrategyList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceOrderedPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceOrderedPlacementStrategyOutputReference <a name="DataAwsEcsServiceOrderedPlacementStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy">DataAwsEcsServiceOrderedPlacementStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceOrderedPlacementStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceOrderedPlacementStrategy">DataAwsEcsServiceOrderedPlacementStrategy</a>

---


### DataAwsEcsServicePlacementConstraintsList <a name="DataAwsEcsServicePlacementConstraintsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get"></a>

```typescript
public get(index: number): DataAwsEcsServicePlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServicePlacementConstraintsOutputReference <a name="DataAwsEcsServicePlacementConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints">DataAwsEcsServicePlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServicePlacementConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServicePlacementConstraints">DataAwsEcsServicePlacementConstraints</a>

---


### DataAwsEcsServiceServiceRegistriesList <a name="DataAwsEcsServiceServiceRegistriesList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceServiceRegistriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceServiceRegistriesOutputReference <a name="DataAwsEcsServiceServiceRegistriesOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries">DataAwsEcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceServiceRegistries;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceServiceRegistries">DataAwsEcsServiceServiceRegistries</a>

---


### DataAwsEcsServiceTaskSetsList <a name="DataAwsEcsServiceTaskSetsList" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceTaskSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get"></a>

```typescript
public get(index: number): DataAwsEcsServiceTaskSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsEcsServiceTaskSetsOutputReference <a name="DataAwsEcsServiceTaskSetsOutputReference" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsService } from '@cdktf/provider-aws'

new dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.pendingCount">pendingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.runningCount">runningCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.stabilityStatus">stabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets">DataAwsEcsServiceTaskSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pendingCount`<sup>Required</sup> <a name="pendingCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.pendingCount"></a>

```typescript
public readonly pendingCount: number;
```

- *Type:* number

---

##### `runningCount`<sup>Required</sup> <a name="runningCount" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.runningCount"></a>

```typescript
public readonly runningCount: number;
```

- *Type:* number

---

##### `stabilityStatus`<sup>Required</sup> <a name="stabilityStatus" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.stabilityStatus"></a>

```typescript
public readonly stabilityStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsServiceTaskSets;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsService.DataAwsEcsServiceTaskSets">DataAwsEcsServiceTaskSets</a>

---



