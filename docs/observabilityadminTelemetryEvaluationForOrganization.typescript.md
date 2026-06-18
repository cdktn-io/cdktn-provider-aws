# `observabilityadminTelemetryEvaluationForOrganization` Submodule <a name="`observabilityadminTelemetryEvaluationForOrganization` Submodule" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryEvaluationForOrganization <a name="ObservabilityadminTelemetryEvaluationForOrganization" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization aws_observabilityadmin_telemetry_evaluation_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

new observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization(scope: Construct, id: string, config?: ObservabilityadminTelemetryEvaluationForOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig">ObservabilityadminTelemetryEvaluationForOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig">ObservabilityadminTelemetryEvaluationForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions">resetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts"></a>

```typescript
public putTimeouts(value: ObservabilityadminTelemetryEvaluationForOrganizationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---

##### `resetAllRegions` <a name="resetAllRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions"></a>

```typescript
public resetAllRegions(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminTelemetryEvaluationForOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminTelemetryEvaluationForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryEvaluationForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput">allRegionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions">allRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a>

---

##### `allRegionsInput`<sup>Optional</sup> <a name="allRegionsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput"></a>

```typescript
public readonly allRegionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObservabilityadminTelemetryEvaluationForOrganizationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---

##### `allRegions`<sup>Required</sup> <a name="allRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions"></a>

```typescript
public readonly allRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationConfig <a name="ObservabilityadminTelemetryEvaluationForOrganizationConfig" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.Initializer"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

const observabilityadminTelemetryEvaluationForOrganizationConfig: observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions">allRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allRegions`<sup>Optional</sup> <a name="allRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions"></a>

```typescript
public readonly allRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#region ObservabilityadminTelemetryEvaluationForOrganization#region}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityadminTelemetryEvaluationForOrganizationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#timeouts ObservabilityadminTelemetryEvaluationForOrganization#timeouts}

---

### ObservabilityadminTelemetryEvaluationForOrganizationTimeouts <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.Initializer"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

const observabilityadminTelemetryEvaluationForOrganizationTimeouts: observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#create ObservabilityadminTelemetryEvaluationForOrganization#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#delete ObservabilityadminTelemetryEvaluationForOrganization#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer"></a>

```typescript
import { observabilityadminTelemetryEvaluationForOrganization } from '@cdktn/provider-aws'

new observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminTelemetryEvaluationForOrganizationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---



