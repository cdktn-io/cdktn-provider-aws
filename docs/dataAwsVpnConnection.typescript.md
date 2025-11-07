# `dataAwsVpnConnection` Submodule <a name="`dataAwsVpnConnection` Submodule" id="@cdktf/provider-aws.dataAwsVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpnConnection <a name="DataAwsVpnConnection" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection aws_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

new dataAwsVpnConnection.DataAwsVpnConnection(scope: Construct, id: string, config?: DataAwsVpnConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig">DataAwsVpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig">DataAwsVpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetVpnConnectionId">resetVpnConnectionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsVpnConnectionFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetVpnConnectionId` <a name="resetVpnConnectionId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.resetVpnConnectionId"></a>

```typescript
public resetVpnConnectionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isConstruct"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

dataAwsVpnConnection.DataAwsVpnConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformElement"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

dataAwsVpnConnection.DataAwsVpnConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformDataSource"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

dataAwsVpnConnection.DataAwsVpnConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsVpnConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkAttachmentArn">coreNetworkAttachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayConfiguration">customerGatewayConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList">DataAwsVpnConnectionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.gatewayAssociationState">gatewayAssociationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.preSharedKeyArn">preSharedKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList">DataAwsVpnConnectionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vgwTelemetries">vgwTelemetries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList">DataAwsVpnConnectionVgwTelemetriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionIdInput">vpnConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionId">vpnConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `coreNetworkAttachmentArn`<sup>Required</sup> <a name="coreNetworkAttachmentArn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.coreNetworkAttachmentArn"></a>

```typescript
public readonly coreNetworkAttachmentArn: string;
```

- *Type:* string

---

##### `customerGatewayConfiguration`<sup>Required</sup> <a name="customerGatewayConfiguration" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayConfiguration"></a>

```typescript
public readonly customerGatewayConfiguration: string;
```

- *Type:* string

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filter"></a>

```typescript
public readonly filter: DataAwsVpnConnectionFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList">DataAwsVpnConnectionFilterList</a>

---

##### `gatewayAssociationState`<sup>Required</sup> <a name="gatewayAssociationState" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.gatewayAssociationState"></a>

```typescript
public readonly gatewayAssociationState: string;
```

- *Type:* string

---

##### `preSharedKeyArn`<sup>Required</sup> <a name="preSharedKeyArn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.preSharedKeyArn"></a>

```typescript
public readonly preSharedKeyArn: string;
```

- *Type:* string

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.routes"></a>

```typescript
public readonly routes: DataAwsVpnConnectionRoutesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList">DataAwsVpnConnectionRoutesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vgwTelemetries`<sup>Required</sup> <a name="vgwTelemetries" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vgwTelemetries"></a>

```typescript
public readonly vgwTelemetries: DataAwsVpnConnectionVgwTelemetriesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList">DataAwsVpnConnectionVgwTelemetriesList</a>

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsVpnConnectionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `vpnConnectionIdInput`<sup>Optional</sup> <a name="vpnConnectionIdInput" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionIdInput"></a>

```typescript
public readonly vpnConnectionIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `vpnConnectionId`<sup>Required</sup> <a name="vpnConnectionId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.vpnConnectionId"></a>

```typescript
public readonly vpnConnectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpnConnectionConfig <a name="DataAwsVpnConnectionConfig" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

const dataAwsVpnConnectionConfig: dataAwsVpnConnection.DataAwsVpnConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.vpnConnectionId">vpnConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#vpn_connection_id DataAwsVpnConnection#vpn_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsVpnConnectionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#filter DataAwsVpnConnection#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#region DataAwsVpnConnection#region}

---

##### `vpnConnectionId`<sup>Optional</sup> <a name="vpnConnectionId" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionConfig.property.vpnConnectionId"></a>

```typescript
public readonly vpnConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#vpn_connection_id DataAwsVpnConnection#vpn_connection_id}.

---

### DataAwsVpnConnectionFilter <a name="DataAwsVpnConnectionFilter" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

const dataAwsVpnConnectionFilter: dataAwsVpnConnection.DataAwsVpnConnectionFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#name DataAwsVpnConnection#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#values DataAwsVpnConnection#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#name DataAwsVpnConnection#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/data-sources/vpn_connection#values DataAwsVpnConnection#values}.

---

### DataAwsVpnConnectionRoutes <a name="DataAwsVpnConnectionRoutes" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

const dataAwsVpnConnectionRoutes: dataAwsVpnConnection.DataAwsVpnConnectionRoutes = { ... }
```


### DataAwsVpnConnectionVgwTelemetries <a name="DataAwsVpnConnectionVgwTelemetries" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

const dataAwsVpnConnectionVgwTelemetries: dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpnConnectionFilterList <a name="DataAwsVpnConnectionFilterList" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

new dataAwsVpnConnection.DataAwsVpnConnectionFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.get"></a>

```typescript
public get(index: number): DataAwsVpnConnectionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpnConnectionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>[]

---


### DataAwsVpnConnectionFilterOutputReference <a name="DataAwsVpnConnectionFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

new dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpnConnectionFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionFilter">DataAwsVpnConnectionFilter</a>

---


### DataAwsVpnConnectionRoutesList <a name="DataAwsVpnConnectionRoutesList" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

new dataAwsVpnConnection.DataAwsVpnConnectionRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.get"></a>

```typescript
public get(index: number): DataAwsVpnConnectionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpnConnectionRoutesOutputReference <a name="DataAwsVpnConnectionRoutesOutputReference" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

new dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes">DataAwsVpnConnectionRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpnConnectionRoutes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionRoutes">DataAwsVpnConnectionRoutes</a>

---


### DataAwsVpnConnectionVgwTelemetriesList <a name="DataAwsVpnConnectionVgwTelemetriesList" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

new dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.get"></a>

```typescript
public get(index: number): DataAwsVpnConnectionVgwTelemetriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpnConnectionVgwTelemetriesOutputReference <a name="DataAwsVpnConnectionVgwTelemetriesOutputReference" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer"></a>

```typescript
import { dataAwsVpnConnection } from '@cdktf/provider-aws'

new dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.acceptedRouteCount">acceptedRouteCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.lastStatusChange">lastStatusChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.outsideIpAddress">outsideIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries">DataAwsVpnConnectionVgwTelemetries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptedRouteCount`<sup>Required</sup> <a name="acceptedRouteCount" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.acceptedRouteCount"></a>

```typescript
public readonly acceptedRouteCount: number;
```

- *Type:* number

---

##### `lastStatusChange`<sup>Required</sup> <a name="lastStatusChange" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.lastStatusChange"></a>

```typescript
public readonly lastStatusChange: string;
```

- *Type:* string

---

##### `outsideIpAddress`<sup>Required</sup> <a name="outsideIpAddress" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.outsideIpAddress"></a>

```typescript
public readonly outsideIpAddress: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpnConnectionVgwTelemetries;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpnConnection.DataAwsVpnConnectionVgwTelemetries">DataAwsVpnConnectionVgwTelemetries</a>

---



