# `ec2TransitGatewayMeteringPolicyEntry` Submodule <a name="`ec2TransitGatewayMeteringPolicyEntry` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMeteringPolicyEntry <a name="Ec2TransitGatewayMeteringPolicyEntry" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry aws_ec2_transit_gateway_metering_policy_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

new ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry(scope: Construct, id: string, config: Ec2TransitGatewayMeteringPolicyEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig">Ec2TransitGatewayMeteringPolicyEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig">Ec2TransitGatewayMeteringPolicyEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock">resetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId">resetDestinationTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType">resetDestinationTransitGatewayAttachmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock">resetSourceCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId">resetSourceTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType">resetSourceTransitGatewayAttachmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.putTimeouts"></a>

```typescript
public putTimeouts(value: Ec2TransitGatewayMeteringPolicyEntryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts">Ec2TransitGatewayMeteringPolicyEntryTimeouts</a>

---

##### `resetDestinationCidrBlock` <a name="resetDestinationCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock"></a>

```typescript
public resetDestinationCidrBlock(): void
```

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetDestinationTransitGatewayAttachmentId` <a name="resetDestinationTransitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId"></a>

```typescript
public resetDestinationTransitGatewayAttachmentId(): void
```

##### `resetDestinationTransitGatewayAttachmentType` <a name="resetDestinationTransitGatewayAttachmentType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType"></a>

```typescript
public resetDestinationTransitGatewayAttachmentType(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSourceCidrBlock` <a name="resetSourceCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock"></a>

```typescript
public resetSourceCidrBlock(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```

##### `resetSourceTransitGatewayAttachmentId` <a name="resetSourceTransitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId"></a>

```typescript
public resetSourceTransitGatewayAttachmentId(): void
```

##### `resetSourceTransitGatewayAttachmentType` <a name="resetSourceTransitGatewayAttachmentType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType"></a>

```typescript
public resetSourceTransitGatewayAttachmentType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicyEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayMeteringPolicyEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicyEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference">Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput">destinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput">destinationTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput">destinationTransitGatewayAttachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput">meteredAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput">policyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput">sourceCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput">sourceTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput">sourceTransitGatewayAttachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts">Ec2TransitGatewayMeteringPolicyEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput">transitGatewayMeteringPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount">meteredAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber">policyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference">Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference</a>

---

##### `destinationCidrBlockInput`<sup>Optional</sup> <a name="destinationCidrBlockInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput"></a>

```typescript
public readonly destinationCidrBlockInput: string;
```

- *Type:* string

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentIdInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput"></a>

```typescript
public readonly destinationTransitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentTypeInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput"></a>

```typescript
public readonly destinationTransitGatewayAttachmentTypeInput: string;
```

- *Type:* string

---

##### `meteredAccountInput`<sup>Optional</sup> <a name="meteredAccountInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput"></a>

```typescript
public readonly meteredAccountInput: string;
```

- *Type:* string

---

##### `policyRuleNumberInput`<sup>Optional</sup> <a name="policyRuleNumberInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput"></a>

```typescript
public readonly policyRuleNumberInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceCidrBlockInput`<sup>Optional</sup> <a name="sourceCidrBlockInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput"></a>

```typescript
public readonly sourceCidrBlockInput: string;
```

- *Type:* string

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentIdInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput"></a>

```typescript
public readonly sourceTransitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentTypeInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput"></a>

```typescript
public readonly sourceTransitGatewayAttachmentTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Ec2TransitGatewayMeteringPolicyEntryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts">Ec2TransitGatewayMeteringPolicyEntryTimeouts</a>

---

##### `transitGatewayMeteringPolicyIdInput`<sup>Optional</sup> <a name="transitGatewayMeteringPolicyIdInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput"></a>

```typescript
public readonly transitGatewayMeteringPolicyIdInput: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentId`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId"></a>

```typescript
public readonly destinationTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentType`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType"></a>

```typescript
public readonly destinationTransitGatewayAttachmentType: string;
```

- *Type:* string

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount"></a>

```typescript
public readonly meteredAccount: string;
```

- *Type:* string

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber"></a>

```typescript
public readonly policyRuleNumber: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceCidrBlock`<sup>Required</sup> <a name="sourceCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentId`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId"></a>

```typescript
public readonly sourceTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentType`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType"></a>

```typescript
public readonly sourceTransitGatewayAttachmentType: string;
```

- *Type:* string

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId"></a>

```typescript
public readonly transitGatewayMeteringPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMeteringPolicyEntryConfig <a name="Ec2TransitGatewayMeteringPolicyEntryConfig" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

const ec2TransitGatewayMeteringPolicyEntryConfig: ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount">meteredAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account Ec2TransitGatewayMeteringPolicyEntry#metered_account}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber">policyRuleNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number Ec2TransitGatewayMeteringPolicyEntry#policy_rule_number}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id Ec2TransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block Ec2TransitGatewayMeteringPolicyEntry#destination_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range Ec2TransitGatewayMeteringPolicyEntry#destination_port_range}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol Ec2TransitGatewayMeteringPolicyEntry#protocol}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block Ec2TransitGatewayMeteringPolicyEntry#source_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range Ec2TransitGatewayMeteringPolicyEntry#source_port_range}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts">Ec2TransitGatewayMeteringPolicyEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount"></a>

```typescript
public readonly meteredAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account Ec2TransitGatewayMeteringPolicyEntry#metered_account}.

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber"></a>

```typescript
public readonly policyRuleNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number Ec2TransitGatewayMeteringPolicyEntry#policy_rule_number}.

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId"></a>

```typescript
public readonly transitGatewayMeteringPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id Ec2TransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}.

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="destinationCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block Ec2TransitGatewayMeteringPolicyEntry#destination_cidr_block}.

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range Ec2TransitGatewayMeteringPolicyEntry#destination_port_range}.

---

##### `destinationTransitGatewayAttachmentId`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId"></a>

```typescript
public readonly destinationTransitGatewayAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}.

---

##### `destinationTransitGatewayAttachmentType`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType"></a>

```typescript
public readonly destinationTransitGatewayAttachmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol Ec2TransitGatewayMeteringPolicyEntry#protocol}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#region Ec2TransitGatewayMeteringPolicyEntry#region}

---

##### `sourceCidrBlock`<sup>Optional</sup> <a name="sourceCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block Ec2TransitGatewayMeteringPolicyEntry#source_cidr_block}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range Ec2TransitGatewayMeteringPolicyEntry#source_port_range}.

---

##### `sourceTransitGatewayAttachmentId`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId"></a>

```typescript
public readonly sourceTransitGatewayAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}.

---

##### `sourceTransitGatewayAttachmentType`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType"></a>

```typescript
public readonly sourceTransitGatewayAttachmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2TransitGatewayMeteringPolicyEntryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts">Ec2TransitGatewayMeteringPolicyEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#timeouts Ec2TransitGatewayMeteringPolicyEntry#timeouts}

---

### Ec2TransitGatewayMeteringPolicyEntryTimeouts <a name="Ec2TransitGatewayMeteringPolicyEntryTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts.Initializer"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

const ec2TransitGatewayMeteringPolicyEntryTimeouts: ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#create Ec2TransitGatewayMeteringPolicyEntry#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_transit_gateway_metering_policy_entry#delete Ec2TransitGatewayMeteringPolicyEntry#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference <a name="Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-aws'

new ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts">Ec2TransitGatewayMeteringPolicyEntryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayMeteringPolicyEntryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryTimeouts">Ec2TransitGatewayMeteringPolicyEntryTimeouts</a>

---



